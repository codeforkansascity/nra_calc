import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import Map from '../Map'
import PropTypes from 'prop-types';

const zonePickerStyle = {
  textAlign: 'center',
  marginBottom: '1em'
}

//popup modal containing Leaflet.js map

class ZonePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      modalOpen: false 
    }
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true
    })
  }
  handleClose = () => {
    this.setState({
      modalOpen: false
    })
  }
  render() {
    return(
      <div style={zonePickerStyle}>
        <Modal 
        trigger={
          <Button 
            fluid size='large'
            onClick={this.handleOpen}
            color={this.props.zone ? this.props.successColor : undefined}
          >
            {this.props.zone ? <><Icon name="checkmark"/> Zone is set: {this.props.zone}</> : this.props.message}
          </Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}>
          <Modal.Header>
            {this.props.message}
          </Modal.Header>
          <Modal.Content image>
            <Map 
            setZoneFromMap={this.props.setZoneFromMap}/>
          </Modal.Content>
          <Modal.Actions>
          {!this.props.zone && <Button
          fluid
          size='large'
          color='blue'>
            {"Where is my zone?"}
          </Button>}
          {this.props.zone && <Button
              primary
              fluid
              size='large'
              onClick={this.handleClose}>
              <Icon name="checkmark"/>Done
            </Button>}
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

ZonePicker.propTypes = {
  zone: PropTypes.string,
  setZoneFromMap: PropTypes.func,
  message: PropTypes.any,
  successColor: PropTypes.string
}

export default ZonePicker;
