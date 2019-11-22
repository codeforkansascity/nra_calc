import { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { withLeaflet } from "react-leaflet";
import PropTypes from 'prop-types';

/* 
Code attribution: solution to integrating search control with react-leaflet sourced from 
'https://stackoverflow.com/questions/54904484/unable-to-add-leaflet-geosearch-to-react-application'. 
*/

class Search extends Component {
  componentDidMount() {
    const map = this.props.leaflet.map;
    const searchControl = new ELG.Geosearch({zoomToResult: false}).addTo(map);
    const results = new L.LayerGroup().addTo(map);

    searchControl.on("results", function(data) {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });
  }

  render() {
    return null;
  }
}

//Need to review valid proptypes. leaflet == component, map == object?
Search.propTypes = {
    leaflet: PropTypes.any,
    map: PropTypes.any, 
  }

export default withLeaflet(Search);