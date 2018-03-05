import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map.js';
import Header from './Header.js';
import gymsMockJson from '../mock/gyms.json';
import PropTypes from 'prop-types';

const initial_center = {lat: 59.4270203, lng: 24.714007};

const initial_zoom = 10;

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
            <div>
                <Header />
                <div className="results-wrapper">
                    <div className="right-results-bar">

                    </div>
                    <div className="results-map">
                        <Map ref="result-map" markers={this.state.markers} lat={this.props.lat} lng={this.props.lng} defaultZoom={10}/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Result;