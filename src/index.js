import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap'
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './context'
import Auth from "./Auth"

const auth = new Auth();

let state = {}

window.setState = (changes) => {
  state = Object.assign({}, state, changes)
  ReactDOM.render(<ProductProvider><App {...state} /></ProductProvider>, document.getElementById("root"));
}


let initialState = {
  auth
}

window.setState(initialState)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
