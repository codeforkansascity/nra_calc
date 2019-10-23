import React from 'react';
import './NRACalculator.scss';
//import for Semantic-UI components
import { Button, Icon, Form, Grid, Segment, GridColumn, Label, Message } from 'semantic-ui-react'
import { getNRAEstimates } from './calculations';
import ZonePicker from '../ZonePicker';
import PropertyTypes from './PropertyTypes';

//array of property type options for drop-down input
const HomeOptions = [
  {key: 's', text: 'Single-Family Detached', value: PropertyTypes.singleFamilyDetached},
  {key: 'd', text: 'Duplex Single-Family Attached', value: PropertyTypes.duplexSingleFamilyAttached},
  {key: 't', text: 'Townhomes Single-Family Attached', value: PropertyTypes.townhomeSingleFamilyAttached},
  {key: 'sd', text: 'Single Duplex', value: PropertyTypes.singleDuplex},
  {key: 'm', text: 'Multi-Family', value: PropertyTypes.multiFamily}
]

//array of improvement type options for drop-down input
const ImprovOptions = [
  {key: 'c', text: 'New Construction', value: 'new'},
  {key: 'r', text: 'Rehabilitation', value: 'rehab'},
  {key: 'o', text: 'Other', value: 'other'}
]

class NRACalculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: "",
      valueAfterInvestment: "",
      zone: "",
      estimates: {},
      isHistoric: false, // TODO: Move this into the 'property type' dropdown
      investmentType: "",
      propertyType: "",
      eligibility: {},
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCurrent = (e, data) => {
    this.setState({
      current: cleanNumber(data.value),
    })
  }

  handleValueAfterInvestment = (e, data) => {
    this.setState({
      valueAfterInvestment: cleanNumber(data.value),
    })
  }

  handleHistoric = (e, data) => {
    this.setState({
      isHistoric: data.checked,
    })
  }

  handleInvestmentType = (e, data) => {
    this.setState({
      investmentType: data.value,
    })
  }

  handlePropertyType = (e, data) => {
    this.setState({
      propertyType: data.value,
    })
  }

  handleZone = (e, data) => {
    this.setState({
      zone: cleanNumber(data.value),
    })
  }

  setZoneFromMap = zone => {
      this.setState({ zone });
  }

  handleSubmit() {
    if (this.state.current && this.state.valueAfterInvestment && this.state.zone) {
      const estimates = getNRAEstimates(
        this.state.current,
        this.state.valueAfterInvestment,
        this.state.investmentType,
        this.state.isHistoric ? 'historic' : this.state.propertyType,
        this.state.zone
        );
      this.setState({
        estimates,
        eligibility: estimates.eligibility,
        errors: estimates.eligibility.errors,
        investmentTypeError: estimates.eligibility.errors.map(error => error.category === 'investmentType')[0],
        propertyTypeError: estimates.eligibility.errors.map(error => error.category === 'propertyType')[0],
        valueAfterInvestmentError: estimates.eligibility.errors.map(error => error.category === 'minimumInvestment')[0]
      });
    }
  }

  render = () => {
    return (
      <Grid textAlign='left' className="NRACalculator">
        <GridColumn>
          <Form size='large'>
            <Segment stacked>

              {/* Text inputs grouped together */}
              <Form.Group
                widths="equal">
                    {/** Current valuation form input **/}
                  <Form.Input
                    fluid
                    label="Current Property Value"
                    labelPosition="left"
                    placeholder='Current Property Value'
                    onChange={this.handleCurrent}>
                    <Label>$</Label>
                    <input />
                  </Form.Input>
                  {/** Est. Value After Investment form input **/}
                  <Form.Input
                    fluid
                    error={this.state.valueAfterInvestmentError}
                    label="Est. Value After Investment"
                    labelPosition="left"
                    placeholder='Est. Value After Investment'
                    onChange={this.handleValueAfterInvestment}>
                    <Label>$</Label>
                    <input />
                  </Form.Input>
              </Form.Group>

              {/* Dropdown inputs grouped together */}
              <Form.Group
                widths='equal'>
                  {/** Dropdown input for improvement type **/}
                  <Form.Select
                    fluid
                    error={this.state.investmentTypeError}
                    label='Investment Type'
                    options={ImprovOptions}
                    placeholder='Investment Type'
                    onChange={this.handleInvestmentType}  
                    />
                  {/** Dropdown input for home type **/}
                  <Form.Select
                    fluid
                    error={this.state.propertyTypeError}
                    label='Property Type'
                    options={HomeOptions}
                    placeholder='Building Type'
                    onChange={this.handlePropertyType}  
                    />
              </Form.Group>


              {/* Checkbox to mark historical properties. No functionality yet. */}
              <Form.Group grouped>
                <label>Other</label>
                <Form.Checkbox 
                  label='This is a Historic Property'
                  onChange={this.handleHistoric}
                />
              </Form.Group>

              {/** Zone picker. Opens map modal **/}
              <ZonePicker 
                setZoneFromMap={this.setZoneFromMap}
                message={<>{<Icon name="map"/>} Select Your Zone</>}
                successColor='green'
                zone={this.state.zone}/>

              {/** Submit button **/}
              <Button
                disabled={
                  !this.state.current
                  || !this.state.valueAfterInvestment
                  || !this.state.zone
                  || !this.state.investmentType
                  || !this.state.propertyType
                }
                color='blue'
                fluid size='large'
                onClick={this.handleSubmit}>
                <Icon name="calculator"/>
                Calculate Rebate
              </Button>

              { /* Calculation results */ }
              { this.state.estimates.estAverage &&
                <Segment basic textAlign="center">
                  <p>These estimates provide a range depending on the mill rate, which vary within each zone.</p>

                  <p><b>You pay</b> ${
                    formatNumber(this.state.estimates.estLow.payPerYear)
                    } - ${
                      formatNumber(this.state.estimates.estHigh.payPerYear)
                    } in taxes each year</p>

                  <p><b>You save</b> ${
                    formatNumber(this.state.estimates.estLow.savePerYear)
                    } - ${
                      formatNumber(this.state.estimates.estHigh.savePerYear)
                    } in taxes per year</p>

                  <p><b>Over {this.state.estimates.estAverage.incentiveYears} years, you save</b> ${
                      formatNumber(this.state.estimates.estLow.savings)
                    } - ${
                      formatNumber(this.state.estimates.estHigh.savings)
                    } in taxes.</p>
                </Segment>
              }
              { this.state.errors.length > 0 &&
                <Segment basic textAlign="center">
                  {this.state.errors.map(error => <Message color="red" key={error.id}>{error.message}</Message>)}
                </Segment>
              }

            </Segment>
          </Form>
        </GridColumn>
      </Grid>
    )
  }
}

function cleanNumber(num) {
  // Remove $ and , symbols for calculation
  const cleanNum = num.toString().replace(/,*\$*/g, '');
  return parseInt(Math.floor(cleanNum));
}

function formatNumber(num) {
  // This will limit to 2 decimals and add commas to thousands
  return num.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export default NRACalculator;
