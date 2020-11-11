import React from "react";
import ProductPage from "../container/product";
import App from "../App";
import Home from "../container/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/product" component={ProductPage}></Route>

      </Router>
    );
  }
}

export default AppRouter;
