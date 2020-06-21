import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Callback from "./Components/Callback"
import "./App.css";

console.log('wtf' , this)

class App extends Component {
  render() {
    console.log('wtf' , this)
    return (
      <HashRouter basename="/">
        <div>
          <Navbar {...this.props}/>
          <Route {...this.props} path="/projects" component={Portfolio} />
          <Route {...this.props} path="/callback" component={Callback}/>
          <Route exact path="/" component={Home} />
        </div>
      </HashRouter>
    );
  }
}

export default App;