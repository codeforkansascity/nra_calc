import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';


class Map extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      polygons: [],
      position: [39.1155, -94.7478],
      zoom: 11,
    }
  }

  getAreaFromClick = e => {
      this.props.setZoneFromMap(e.layer.feature.properties.Name);
  }

  //load geoJSON containing zone polygons
  async componentDidMount() {
    //API call
    const response = await fetch(`https://opendata.arcgis.com/datasets/adb3297a0cb14d32b0274aaffa469538_0.geojson`);
    const json = await response.json();
    this.setState({
      polygons: json,
    });
    console.log(this.state.polygons)
  }

  render = () => {
    return (
      <LeafletMap
        style={{ width: '100%' }}
        center={this.state.position}
        zoom={this.state.zoom}
      >
        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />

        <GeoJSON 
          key={this.state.polygons}
          data={this.state.polygons}
          onClick={this.getAreaFromClick}
        />
        
        {/* setZoneFromMap sets the zone in the NRACalculator component */}
        <Marker position={this.state.position} onClick={this.props.setZoneFromMap}>
          <Popup open>Successfully set your zone to 1</Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map