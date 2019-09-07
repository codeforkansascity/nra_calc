import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Map from '../Map'

const modalStyle = {
    textAlign: 'center',
    marginBottom: '1em'
}

//popup modal containing Leaflet.js map

class ZonePicker extends React.Component {
    render() {
        return(
            <div style={modalStyle}>
                <Modal trigger={<Button fluid size='large'>Select Your Zone</Button>}>
                    <Modal.Header>Select Your Zone</Modal.Header>
                    <Modal.Content image>
                        <Map setZoneFromMap={this.props.setZoneFromMap}/>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default ZonePicker;
