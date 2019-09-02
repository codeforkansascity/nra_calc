import React from 'react';
import './NRACalculator.scss';
//import for Semantic-UI components
import { Button, Form, Grid, Segment, GridColumn, Label, Message } from 'semantic-ui-react'
import { getNRAEstimates } from './calculations';

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

  handleImprovements = e => {
    this.setState({
      afterImprovements: cleanNumber(e.target.value),
    })
  }

  handleZone = e => {
    this.setState({
      zone: cleanNumber(e.target.value),
    })
  }

  // Will pass input values from state to backend as object
  handleSubmit() {
    if (this.state.current && this.state.afterImprovements && this.state.zone) {
      this.setState({
        estimates: getNRAEstimates(this.state.current, this.state.afterImprovements, this.state.zone)
      });
      console.warn('ZONE/MILL RATE DATA IS MOCKED. THESE VALUES ARE NOT ACCURATE.')
      console.log(this.state.estimates);
    }
  }

  render() {
    return (
      <Grid textAlign='left' className="NRACalculator">
        <GridColumn>
          { this.state.estimates &&
            <Message color="yellow" style={{ textAlign: 'center' }}>
              <p>Note: These estimates use fake mill rates, and are not yet accurate approximations.</p>
            </Message>}
          <Form size='large'>
            <Segment stacked>

              {/** Current valuation form input **/}
              <Form.Input
                label="Current Value"
                labelPosition="left"
                placeholder='Current Value'
                onChange={this.handleCurrent}
              >
                <Label>$</Label>
                <input />
              </Form.Input>

              {/** Est. value after improvements form input **/}
              <Form.Input
                label="Est. Value After Improvements"
                labelPosition="left"
                placeholder='Est. Value After Improvements'
                onChange={this.handleImprovements}
              >
                <Label>$</Label>
                <input />
              </Form.Input>

              {/** Zone form input **/}
              <Form.Input
                label="Zone"
                placeholder='Zone'
                onChange={this.handleZone}
              />

              {/** Submit button **/}
              <Button color='blue'
                fluid size='large'
                onClick={this.handleSubmit}
              >
                Calculate Rebate
              </Button>

              { this.state.estimates && <Segment basic textAlign="center">
                <p>These estimates provide a range depending on the mill rate, which vary within each zone.</p>
                <p><b>Pay Per Year:</b> ${
                  formatNumber(this.state.estimates.estLow.payPerYear)
                  } - ${
                    formatNumber(this.state.estimates.estHigh.payPerYear)
                  }</p>
                <p><b>Savings Per Year:</b> ${
                  formatNumber(this.state.estimates.estLow.savePerYear)
                  } - ${
                    formatNumber(this.state.estimates.estHigh.savePerYear)
                  }</p>
                <p><b>10 Year Savings:</b> ${
                    formatNumber(this.state.estimates.estLow.savings)
                  } - ${
                    formatNumber(this.state.estimates.estHigh.savings)
                  }</p>
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
