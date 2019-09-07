import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [39.1155, -94.6268];

class Map extends React.Component {

  test = (input) => {
      console.log(input);
  }

  render = () => {
    return (
      <LeafletMap
        style={{ width: '100%' }}
        center={position}
        zoom={12}
        maxZoom={16}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.2}
      >
        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
        {/* setZoneFromMap sets the zone in the NRACalculator component */}
        <Marker position={position} onClick={this.props.setZoneFromMap}>
          <Popup open>Successfully set your zone to 1</Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map