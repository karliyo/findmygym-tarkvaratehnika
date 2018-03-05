import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import History from './components/History.js';
import Result from './components/Result.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={History}>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/results" component={
                (props) => <Result lat={40.4936614} lng={-73.9561439}/>}
            />
        </div>
    </Router>,
    document.getElementById('root'),
);
registerServiceWorker();