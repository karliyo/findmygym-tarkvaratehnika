import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


class Map extends Component {
  render(){
      const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = {
              {
                  lat: 59.4362647,
                  lng: 24.747923
              }
          }
          defaultZoom = {
              10
          }
        >
        </GoogleMap>
     ));
    return(
      <div>
        <GoogleMapExample
          containerElement = {
			  <div style = {{ height: '500px', width: '100%' }} /> }
          mapElement={ <div style={{ height: '100%' }} /> }
        />
      </div>
   );
    }
};

export default Map;
