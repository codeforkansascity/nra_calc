import React from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Map from '../Map';

const zonePickerStyle = {
  textAlign: 'center',
  marginBottom: '1em',
};

// popup modal containing Leaflet.js map

class ZonePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      modalOpen: false,
    });
  };

  render() {
    const {
      zone, successColor, message, setZoneFromMap,
    } = this.props;

    const {
      modalOpen,
    } = this.state;

    return (
      <div style={zonePickerStyle}>
        <Modal
          trigger={(
            <Button
              fluid
              size="large"
              onClick={this.handleOpen}
              color={zone ? successColor : undefined}
            >
              {zone ? (
                <>
                  <Icon name="checkmark" />
                  {' '}
                  Zone is set:
                  {zone}
                </>
              ) : (
                message
              )}
            </Button>
          )}
          open={modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>
            {message}

            <a href="https://codeforkc.org/nra_calc" style={{ float: 'right' }}>
              Where&apos;s my zone?
            </a>
          </Modal.Header>
          <Modal.Content image>
            <Map setZoneFromMap={setZoneFromMap} />
          </Modal.Content>
          {zone && (
            <Modal.Actions>
              <Button primary fluid size="large" onClick={this.handleClose}>
                <Icon name="checkmark" />
                Done
              </Button>
            </Modal.Actions>
          )}
        </Modal>
      </div>
    );
  }
}

ZonePicker.propTypes = {
  zone: PropTypes.string.isRequired,
  successColor: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  setZoneFromMap: PropTypes.func.isRequired,
};

export default ZonePicker;
