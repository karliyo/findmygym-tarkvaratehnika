import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import Header from './components/Header.js';
import MidContainer from './components/MidContainer.js';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MidContainer />
        <div classname="Start-page-footer">
            <div className="Gmap-container">
              <Map/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
