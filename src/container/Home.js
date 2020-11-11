import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import LocationField from "../components/navbar";
import SimpleContainer from "../components/grid";
import image from "../Images/hero_bg_pk.jpg";
import SimpleMenu from "../components/breadcrum";
import Footer from "../components/footer";

import LoginArea from "../components/loginarea"


class Home extends React.Component {
  render() {
      console.log("Home Props==> ",this.props)
    return (
      <div>
        {/* <h1>Home Component</h1>
        <Link to="/product">Go to product page</Link> */}
        
        <LoginArea />
        <LocationField />
        <SimpleMenu />

        <div>
          <img
            width="100%"
            height="252px"
            src={image}
            style={{
              marginTop: "20px",
              backgroundPosition: "50%",
              backgroundSize: "cover",
            }}
          />
        </div>

        <div style={{fontSize: "24px",margin:"10px 0px 4px 185px ",color:"#002f34"}}>
          <span>Fresh recommendations</span>
        </div>

        <SimpleContainer prop={this.props}/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = () => ({
  name: "mohsin",
});

export default connect(mapStateToProps, null)(Home);
