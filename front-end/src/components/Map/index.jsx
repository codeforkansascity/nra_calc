import React from 'react';
import { Map as LeafletMap, TileLayer, GeoJSON } from 'react-leaflet';
import PropTypes from 'prop-types';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polygons: [],
      position: [39.1155, -94.7478],
      zoom: 11,
      selection: [],
      highlight: false,
    };
  }

  // load geoJSON containing zone polygons
  async componentDidMount() {
    // API call
    const response = await fetch(
      'https://opendata.arcgis.com/datasets/adb3297a0cb14d32b0274aaffa469538_0.geojson',
    );
    const json = await response.json();
    this.setState({
      polygons: json,
    });
  }

  // sets zone selection in form. also serves as wrapper function for toggling highlight.
  getAreaFromClick = (e) => {
    const { setZoneFromMap } = this.props;
    setZoneFromMap(e.layer.feature.properties.Name);
    this.setState({
      selection: e.layer.feature,
    });
    this.handleHighlight();
  };

  handleHighlight() {
    const { highlight } = this.state;
    if (highlight === true) {
      this.setState({
        highlight: false,
      });
    } else {
      this.setState({
        highlight: true,
      });
    }
  }

  render = () => {
    const {
      position, zoom, polygons, highlight, selection,
    } = this.state;
    return (
      <LeafletMap
        style={{ width: '100%' }}
        center={position}
        zoom={zoom}
          // disabled click zoom to prevent conflict with zone selection
        doubleClickZoom={false}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <GeoJSON
          key={polygons}
          data={polygons}
          onClick={this.getAreaFromClick}
          style={{ color: 'green' }}
        />

        {/* contains highlighted zone. currently alerts console about duplicate keys. will resolve error. */}
        {highlight && (
        <GeoJSON
          key={selection}
          data={selection}
          style={{ color: 'yellow' }}
        />
        )}
      </LeafletMap>
    );
  }
}

Map.propTypes = {
  setZoneFromMap: PropTypes.func.isRequired,
};

export default Map;
