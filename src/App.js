import React from "react";
// import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import { HashRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <HashRouter basename = {process.env.PUBLIC_URL + '/'}>
        <div>
          <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            </div>
      </HashRouter>
    </React.Fragment>
  );
}

/*
SWITCH EXAMPLE 


<Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route component={Default}></Route>}
</Switch>
*/

export default App;
