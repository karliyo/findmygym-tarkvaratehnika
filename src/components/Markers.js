import React, { Component } from 'react';
import Marker, { InfoWindow } from 'react-google-maps';

class Markers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    onToggleOpen() {
        console.log(this);
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {
            props: {
                index,
                lat,
                lng,
                open
            }
        } = this;
        console.log(this.props);
        return (
            <Marker
                key={index}
                onClick={this.onToggleOpen}
                position={{ lat: lat, lng: lng }}
            >
                {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}><span>{index}</span></InfoWindow>}
                </Marker>
        );
    }
}

export default Markers;