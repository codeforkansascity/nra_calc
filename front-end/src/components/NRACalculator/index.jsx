import React from 'react';
import './NRACalculator.scss';
//import for Semantic-UI components
import { Button, Icon, Form, Grid, Segment, GridColumn, Label } from 'semantic-ui-react'
import { getNRAEstimates } from './calculations';
import ZonePicker from '../ZonePicker';

//array of property type options for drop-down input
const HomeOptions = [
  {key: 's', text: 'Single-Family', value: 'single'},
  {key: 'm', text: 'Multi-Family', value: 'multi'},
  {key: 'oh', text: 'Other', value: 'other'}
]

//array of improvement type options for drop-down input
const ImprovOptions = [
  {key: 'c', text: 'New Construction', value: 'construction'},
  {key: 'r', text: 'Rehabilitation', value: 'rehabilitation'},
  {key: 'oi', text: 'Other', value: 'other'}
]

class NRACalculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: "",
      afterImprovements: "",
      zone: "",
      estimates: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCurrent = e => {
    this.setState({
      current: cleanNumber(e.target.value),
    })
  }

  handleInvestment = e => {
    this.setState({
      afterImprovements: cleanNumber(e.target.value),
    })
  }

  handleZone = e => {
    this.setState({
      zone: cleanNumber(e.target.value),
    })
  }

  setZoneFromMap = e => {
      this.setState({ zone: e });
  }

  handleSubmit() {
    if (this.state.current && this.state.afterImprovements && this.state.zone) {
      this.setState({
        estimates: getNRAEstimates(this.state.current, this.state.afterImprovements, this.state.zone)
      });
      console.log(this.state.estimates);
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
                    label="Est. Value After Investment"
                    labelPosition="left"
                    placeholder='Est. Value After Investment'
                    onChange={this.handleInvestment}>
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
                    label='Investment Type'
                    options={ImprovOptions}
                    placeholder='Investment Type'/>
                  {/** Dropdown input for home type **/}
                  <Form.Select
                    fluid
                    label='Building Type'
                    options={HomeOptions}
                    placeholder='Building Type'/>
              </Form.Group>


              {/* Checkbox to mark historical properties. No functionality yet. */}
              <Form.Checkbox 
                label='This is a Historical Property'
              />

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
                  || !this.state.afterImprovements
                  || !this.state.zone
                }
                color='blue'
                fluid size='large'
                onClick={this.handleSubmit}>
                <Icon name="calculator"/>
                Calculate Rebate
              </Button>

              { /* Calculation results */ }
              { this.state.estimates &&
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
                </Segment>}

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
