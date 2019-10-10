/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unused-state */
import React from 'react';
import './NRACalculator.scss';
// import for Semantic-UI components
import {
  Button, Icon, Form, Grid, Segment, GridColumn, Label,
} from 'semantic-ui-react';
import { getNRAEstimates } from './calculations';
import ZonePicker from '../ZonePicker';

function cleanNumber(num) {
  // Remove $ and , symbols for calculation
  const cleanNum = num.toString().replace(/,*\$*/g, '');
  // eslint-disable-next-line radix
  return parseInt(Math.floor(cleanNum));
}

function formatNumber(num) {
  // This will limit to 2 decimals and add commas to thousands
  return num.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// array of property type options for drop-down input
const HomeOptions = [
  { key: 's', text: 'Single-Family', value: 'single' },
  { key: 'm', text: 'Multi-Family', value: 'multi' },
  { key: 'oh', text: 'Other', value: 'other' },
];

// array of improvement type options for drop-down input
const ImprovOptions = [
  { key: 'c', text: 'New Construction', value: 'construction' },
  { key: 'r', text: 'Rehabilitation', value: 'rehabilitation' },
  { key: 'oi', text: 'Other', value: 'other' },
];

class NRACalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      valueAfterInvestment: '',
      zone: '',
      estimates: '',
      isHistorical: false,
      investmentType: '',
      propertyType: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCurrent = (e, data) => {
    this.setState({
      current: cleanNumber(data.value),
    });
  }

  handleValueAfterInvestment = (e, data) => {
    this.setState({
      valueAfterInvestment: cleanNumber(data.value),
    });
  }

  handleHistorical = (e, data) => {
    this.setState({
      isHistorical: data.checked,
    });
  }

  handleInvestmentType = (e, data) => {
    this.setState({
      investmentType: data.value,
    });
  }

  handlePropertyType = (e, data) => {
    this.setState({
      propertyType: data.value,
    });
  }

  handleZone = (e, data) => {
    this.setState({
      zone: cleanNumber(data.value),
    });
  }

  setZoneFromMap = (zone) => {
    this.setState({ zone });
  }

  handleSubmit() {
    const { current, valueAfterInvestment, zone } = this.state;

    if (current && valueAfterInvestment && zone) {
      this.setState({
        estimates: getNRAEstimates(current, valueAfterInvestment, zone),
      });
    }
  }

  render = () => {
    const {
      current, propertyType, estimates, valueAfterInvestment, investmentType, zone,
    } = this.state;
    return (
      <Grid textAlign="left" className="NRACalculator">
        <GridColumn>
          <Form size="large">
            <Segment stacked>

              {/* Text inputs grouped together */}
              <Form.Group
                widths="equal"
              >
                {/** Current valuation form input * */}
                <Form.Input
                  fluid
                  label="Current Property Value"
                  labelPosition="left"
                  placeholder="Current Property Value"
                  onChange={this.handleCurrent}
                >
                  <Label>$</Label>
                  <input />
                </Form.Input>
                {/** Est. Value After Investment form input * */}
                <Form.Input
                  fluid
                  label="Est. Value After Investment"
                  labelPosition="left"
                  placeholder="Est. Value After Investment"
                  onChange={this.handleValueAfterInvestment}
                >
                  <Label>$</Label>
                  <input />
                </Form.Input>
              </Form.Group>

              {/* Dropdown inputs grouped together */}
              <Form.Group
                widths="equal"
              >
                {/** Dropdown input for improvement type * */}
                <Form.Select
                  fluid
                  label="Investment Type"
                  options={ImprovOptions}
                  placeholder="Investment Type"
                  onChange={this.handleInvestmentType}
                />
                {/** Dropdown input for home type * */}
                <Form.Select
                  fluid
                  label="Building Type"
                  options={HomeOptions}
                  placeholder="Building Type"
                  onChange={this.handlePropertyType}
                />
              </Form.Group>

              {/* Checkbox to mark historical properties. No functionality yet. */}
              <Form.Group grouped>
                <label>Other</label>
                <Form.Checkbox
                  label="This is a Historical Property"
                  onChange={this.handleHistorical}
                />
              </Form.Group>

              {/** Zone picker. Opens map modal * */}
              <ZonePicker
                setZoneFromMap={this.setZoneFromMap}
                message={(
                  <>
                    <Icon name="map" />
                    {' '}
                    Select Your Zone
                  </>
                )}
                successColor="green"
                zone={zone}
              />

              {/** Submit button * */}
              <Button
                disabled={
                    !current
                    || !valueAfterInvestment
                    || !zone
                    || !investmentType
                    || !propertyType
                  }
                color="blue"
                fluid
                size="large"
                onClick={this.handleSubmit}
              >
                <Icon name="calculator" />
                  Calculate Rebate
              </Button>

              { /* Calculation results */ }
              { estimates
                  && (
                  <Segment basic textAlign="center">
                    <p>These estimates provide a range depending on the mill rate, which vary within each zone.</p>

                    <p>
                      <b>You pay</b>
                      {' '}
                        $
                      {
                        formatNumber(estimates.estLow.payPerYear)
                      }
                      {' '}
                        - $
                      {
                        formatNumber(estimates.estHigh.payPerYear)
                      }
                      {' '}
                        in taxes each year
                    </p>

                    <p>
                      <b>You save</b>
                      {' '}
                        $
                      {
                        formatNumber(estimates.estLow.savePerYear)
                      }
                      {' '}
                        - $
                      {
                        formatNumber(estimates.estHigh.savePerYear)
                      }
                      {' '}
                        in taxes per year
                    </p>

                    <p>
                      <b>
                        Over
                        {estimates.estAverage.incentiveYears}
                        {' '}
                        years, you save
                      </b>
                      {' '}
                        $
                      {
                        formatNumber(estimates.estLow.savings)
                      }
                      {' '}
                        - $
                      {
                        formatNumber(estimates.estHigh.savings)
                      }
                      {' '}
                        in taxes.
                    </p>
                  </Segment>
                  )}

            </Segment>
          </Form>
        </GridColumn>
      </Grid>
    );
  }
}

export default NRACalculator;
