import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import Map from '../Map'

const modalStyle = {
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
            <div style={modalStyle}>
                <Modal 
                trigger={
                    <Button 
                        fluid size='large'
                        onClick={this.handleOpen}
                        color={this.props.zone ? this.props.successColor : undefined}
                    >
                        {this.props.zone ? <><Icon name="checkmark"/> Zone is Set: {this.props.zone}</> : this.props.message}
                    </Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                    <Modal.Header>{this.props.message}</Modal.Header>
                    <Modal.Content image>
                        <Map 
                        setZoneFromMap={this.props.setZoneFromMap}/>
                    </Modal.Content>
                    <Modal.Actions>
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

export default ZonePicker;
