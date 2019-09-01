import React from 'react';
import './NRACalculator.scss';
//import for Semantic-UI components
import { Button, Form, Grid, Segment, GridColumn } from 'semantic-ui-react'
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
      current: parseInt(e.target.value),
    })
  }

  handleImprovements = e => {
    this.setState({
      afterImprovements: parseInt(e.target.value),
    })
  }

  handleZone = e => {
    this.setState({
      zone: parseInt(e.target.value),
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
      <Grid textAlign='center'>
        <GridColumn style={{ maxWidth: '500px' }}>
          <Form size='large'>
            <Segment stacked>
              <Form.Input placeholder='Current Value' onChange={this.handleCurrent}/>
              <Form.Input placeholder='Improvements Value' onChange={this.handleImprovements}/>
              <Form.Input placeholder='Zone' onChange={this.handleZone}/>
              <Button color='blue' fluid size='large' onClick={this.handleSubmit}>
                Calculate Rebate
              </Button>
            </Segment>
          </Form>
        </GridColumn>
      </Grid>
    )
  }
}

export default NRACalculator;
