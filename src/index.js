import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import History from './components/History.js';
import Result from './components/Result.js';
import './index.css';
import App from './App';
import SearchBar from './components/SearchBar.js';
import registerServiceWorker from './registerServiceWorker';

console.log(this.props);
ReactDOM.render(
    <Router history={History}>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/results" render={(props) => <div>here u go {props.location.lat}<Result lat={props.location.lat} lng={props.location.lng}/></div>}
            />
        </div>
    </Router>,
    document.getElementById('root'),
);


registerServiceWorker();