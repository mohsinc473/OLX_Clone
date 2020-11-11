import React from "react";
import "./App.css";
import GoogleMaps from "./components/location";
import Home from "./container/Home";
import AppRouter from "./config/router"
import {BrowserRouter as Router,Link} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <GoogleMaps/> */}
        <AppRouter />
        
      </div>
    );
  }
}

export default App;
