import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import Map from './Map'

//popup modal containing Leaflet.js map

class MapModal extends React.Component {
    render() {
        return(
            <Modal trigger={<Button>Find Your Zone</Button>}>
                <Modal.Header>Find Your Zone</Modal.Header>
                <Modal.Content image>
                    <Map />
                </Modal.Content>
            </Modal>
        )
    }
}

export default MapModal;
