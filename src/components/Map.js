import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const GymMap = withGoogleMap(props => {
    return <GoogleMap
        defaultCenter={{lat: props.lat, lng:props.lng}}
		center={{lat: props.lat, lng:props.lng}}
        defaultZoom={10}>
        <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.map(marker => (
                <Marker
                    key={marker.id}
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                />
            ))}
        </MarkerClusterer>
    </GoogleMap>
});

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
				defaultZoom={this.props.zoom}
				isMarkerShown={true}
				markerPosition={this.props.marker}
				containerElement = {
					<div id="mapElement" style = {
						{ height: '55%', width: '50%', bottom: '0', position:'absolute', left:'25%', right:'25%' }} />
				}
				mapElement = {<div style={{ height: '100%', zIndex:'10' }} />}
			/>
		);
	}
};

Map.defaultProps = {
	defaultCenter: {lat: 59.6439203, lng: -74.014007},
};

export default Map;
