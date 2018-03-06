import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map.js';
import Header from './Header.js';
import gymsMockJson from '../mock/gyms.json';
import PropTypes from 'prop-types';

const initial_center = {lat: 59.4270203, lng: 24.714007};

const initial_zoom = 10;

const mapStyle = {
    containerElement: <div id="mapElement" style = {{height: '100%', width: 'inherit', position:'fixed' }} />,
    mapElement: <div style={{ height: '100%', zIndex:'10' }} />
};

class Result extends Component {
    // markers={this.state.markers}

    constructor(props) {
        super(props); //props will get logged.
        this.state = {
            center: initial_center,
            defaultZoom: initial_zoom,
        };
        // this.updateState = this.updateState.bind(this);
    }

    // updateState() {
    //     this.setState({center: {lat: this.props.lat, lng: this.props.lng}, defaultZoom: initial_zoom});
    // }


    componentWillMount() {
        this.setState({
            center: initial_center,
            markers: [],
        })
    }

    componentDidMount() {
        this.setState({
            markers: gymsMockJson.gyms,
        });
    }

    render() {
        return(
            <div className="results-wrapper">
                <div className="right-results-bar">
                    <div className="row" style={{height:'inherit', width:'100%'}}>
                        {
                            this.state.markers.map(function (location) {
                                return (<div id="small-cards">
                                    <div class="location-details location-name">
                                        <i class="fas fa-map-marker"></i>
                                        <p>{location.name}</p>
                                    </div>
                                    <div class="location-details">
                                        <i class="fas fa-location-arrow"></i>
                                        <p>{location.address}, {location.city}, {location.country}</p>
                                    </div>
                                    <div class="location-details">
                                        <i class="fas fa-external-link-alt"></i>
                                        <p><a id="website-url" href={location.website}>{location.website}</a></p>
                                    </div>
                                </div>)
                            })
                        }
                    </div>

                </div>
                <div className="results-map">
                    {this.props.lat ?
                        <Map ref="result-map" mapElement={mapStyle.mapElement} containerElement={mapStyle.containerElement} markers={this.state.markers} lat={this.props.lat} lng={this.props.lng} defaultZoom={10}/> :
                        <Map ref="result-map" mapElement={mapStyle.mapElement} containerElement={mapStyle.containerElement} markers={this.state.markers} lat={initial_center.lat} lng={initial_center.lng} defaultZoom={10}/>}
                </div>
            </div>
        );
    };
}

export default Result;