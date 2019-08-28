import React from 'react';
import './NRACalculator.scss';
//import for Semantic-UI components
import { Button, Form, Grid, Segment, GridColumn } from 'semantic-ui-react'



class NRACalculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: "",
      improvements: "",
      zone: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCurrent = e => {
    this.setState({
      current: e.target.value,
    })
  }

  handleImprovements = e => {
    this.setState({
      improvements: e.target.value,
    })
  }

  handleZone = e => {
    this.setState({
      zone: e.target.value,
    })
  }
//will pass input values from state to backend as object
  handleSubmit() {
    console.log(this.state)
  }

  render() {
    return (
      <Grid textAlign='center'>
        <GridColumn style={{ maxWidth: 500 }}>
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
