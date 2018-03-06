import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IndexRoute from 'react-router';
import {Router, Route} from 'react-router-dom';
import History from './components/History.js';
import Result from './components/Result.js';
import './index.css';
import App from './App';
import Header from './components/Header.js';
import registerServiceWorker from './registerServiceWorker';

console.log(this.props);
ReactDOM.render(
    <Router history={History}>
        <div className="wrapper">
            <Header />
            <Route exact path="/" component={App} />
            <Route exact path="/results" render={(props) => <Result lat={props.location.lat} lng={props.location.lng}/>}/>
        </div>
    </Router>,
    document.getElementById('root'),
);


registerServiceWorker();