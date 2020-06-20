import React from "react";
// import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Router>
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
