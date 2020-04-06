import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Index Components/app';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './Assets/css/bootstrap-grid.css'
import './Assets/css/argon.csss'

ReactDOM.render(
    
    <Router basename="/">
        <Route path="/" exact render={ () => <Redirect to="/app" /> } />
        <Route path="/app" component={App} />
    </Router>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
