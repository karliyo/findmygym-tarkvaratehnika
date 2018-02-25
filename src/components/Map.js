import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GymMap = withGoogleMap(props => (
	<GoogleMap
		defaultCenter = {props.defaultCenter}
		defaultZoom = {10}>
	</GoogleMap>
));

class Map extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<GymMap
				defaultCenter={this.props.center}
				center={this.props.center}
				defaultZoom={this.props.zoom}
				isMarkerShown={true}
				markerPosition={this.props.marker}
				containerElement = {
					<div id="mapElement" style = {
						{ height: '50%', width: '100%', bottom: '0', position:'absolute' }} />
				}
				mapElement = {<div style={{ height: '100%', zIndex:'10' }} />}
			/>
		);
	}
};

Map.defaultProps = {
	center: {lat: 59.43696079999999, lng: 24.753574699999945}
};

export default Map;
