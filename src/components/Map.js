import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
// import { compose, withProps, lifecycle } from "recompose"
// import fetch from 'isomorphic-fetch'
// import gymMarker from './assets/gym.svg';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const GymMap = withGoogleMap(props => {
    return <GoogleMap
        defaultCenter={{lat: props.lat, lng:props.lng}}
		center={{lat: props.lat, lng:props.lng}}
        defaultZoom={props.defaultZoom}>
        <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={75}
        >
            {props.markers.map(marker => (
                <Marker
                    key={marker.id}
                    onClick={
                    	function onClick() {
                    		console.log(marker.id + ": " + marker.name + " asukoht: " + marker.city + ", " + marker.county + ", " + marker.country)
                        }
                    }
                    position={{ lat: marker.latitude, lng: marker.longitude }}

				/>
            ))}
        </MarkerClusterer>
    </GoogleMap>
});

// const cssClasses = {mapElement: 'mapElement', input: 'search-input', autocompleteContainer: 'autocomplete-container'};

class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: this.props.lat,
			lng: this.props.lng,
			markers: []
		}
	}

    componentDidUpdate() {

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            lat: nextProps.lat,
            lng: nextProps.lng,
			markers: nextProps.markers
        });
    }


	render() {
		return(
			<GymMap
				lat={this.props.lat}
				lng={this.props.lng}
				markers={this.props.markers}
				defaultZoom={10}
				isMarkerShown={true}
				markerPosition={this.props.marker}
				containerElement = {
					<div id="mapElement" style = {{height: '95%', width: '80%', position:'fixed' }} />
				}
				mapElement = {<div style={{ height: '100%', zIndex:'10' }} />}
			/>
		);
	}
};

Map.defaultProps = {
	defaultCenter: {lat: 59.6439203, lng: 24.614007},
    defaultZoom: 10,
};

export default Map;
