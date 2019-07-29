import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducer from './reducers/authUser'


import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import axios from 'axios';
window.axios = axios;


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

ReactDOM.render(
<Provider store={store}>
<BrowserRouter><AlertProvider template={AlertTemplate} {...options}><App /> </AlertProvider></BrowserRouter>
</Provider>,
document.getElementById('root'));


