import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import Map from '../Map'

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

                        {/*Report missing zone button. No functionality yet. Will implement notification*/}
                        <Button
                            size='medium'
                            color='blue'
                            floated='right'>
                            <Icon name='info circle'/>Where's My Zone?        
                        </Button>
                        
                    </Modal.Header>
                    <Modal.Content image>
                        <Map 
                        setZoneFromMap={this.props.setZoneFromMap}/>
                    </Modal.Content>
                    {this.props.zone && <Modal.Actions>
                        <Button
                            primary
                            fluid
                            size='large'
                            onClick={this.handleClose}>
                            <Icon name="checkmark"/>Done
                        </Button>
                    </Modal.Actions>}
                </Modal>
            </div>
        )
    }
}

export default ZonePicker;
