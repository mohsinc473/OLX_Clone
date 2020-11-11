import React from "react";
import ProductPage from "../container/product";
import Home from "../container/Home";
import PostADForm from "../container/addPage";
import AdDetails from "../container/post_Info";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/product" component={ProductPage}></Route>
          <Route exact path="/post" component={PostADForm}></Route>
          <Route exact path="/post/attributes" component={AdDetails}></Route>

      </Router>
    );
  }
}

export default AppRouter;
