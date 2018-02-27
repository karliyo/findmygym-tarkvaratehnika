import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GymMap = withGoogleMap(props => {
    console.log(props);
    return <GoogleMap
        defaultCenter={props.defaultCenter}
        defaultZoom={10}>
    </GoogleMap>
});

class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: this.props.lat,
			lng: this.props.lng
		}
	}

    componentDidUpdate() {
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            lat: nextProps.lat,
            lng: nextProps.lng,
        });
    }

	render() {
		return(
			<GymMap
				defaultCenter={this.props.defaultCenter}
				center={this.props.center}
				defaultZoom={this.props.zoom}
				isMarkerShown={true}
				markerPosition={this.props.marker}
				containerElement = {
					<div id="mapElement" style = {
						{ height: '70%', width: '100%', bottom: '0', position:'absolute' }} />
				}
				mapElement = {<div style={{ height: '100%', zIndex:'10' }} />}
			/>
		);
	}
};

Map.defaultProps = {
	defaultCenter: {lat: 59.6439203, lng: -74.014007}
};

export default Map;
