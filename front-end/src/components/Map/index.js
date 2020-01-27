import React from 'react'
import { Map as LeafletMap, TileLayer, GeoJSON } from 'react-leaflet';
import PropTypes from 'prop-types';
import Search from './Search';

class Map extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      polygons: [],
      position: [39.1, -94.75],
      zoom: 11,
      selection: [],
      highlight: false,
      marker: []
    }
  }

  handleHighlight() {
    if (this.state.highlight === true) {
      this.setState({
        highlight: false
      })
    } else {
      this.setState({
        highlight: true
      })
    }
  }

  //sets zone selection in form. also serves as wrapper function for toggling highlight.
  getAreaFromClick = e => {
      this.props.setZoneFromMap(e.layer.feature.properties.Name);
      this.setState({
        selection: e.layer.feature,
      })
      this.handleHighlight()
  }


  //load geoJSON containing zone polygons
  async componentDidMount() {
    //API call
    const response = await fetch(`https://opendata.arcgis.com/datasets/adb3297a0cb14d32b0274aaffa469538_0.geojson`);
    const json = await response.json();
    this.setState({
      polygons: json,
    });
  }


  render = () => {

    return (
      <LeafletMap
        style={{ width: '100%' }}
        center={this.state.position}
        zoom={this.state.zoom}
        minZoom={11}
        maxZoom={18}
        //disabled click zoom to prevent conflict with zone selection
        doubleClickZoom={false}>
        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />

        <GeoJSON 
          key={this.state.polygons}
          data={this.state.polygons}
          onClick={this.getAreaFromClick}
          style={{color: "green"}}
          />
        
        {/* contains highlighted zone */}
        {this.state.highlight && 
          <GeoJSON 
            key={this.state.selection}
            data={this.state.selection}
            style={{color: "yellow"}}/>}

        <Search />

      </LeafletMap>
    );
  }
}

Map.propTypes = {
  setZoneFromMap: PropTypes.func
}

export default Map