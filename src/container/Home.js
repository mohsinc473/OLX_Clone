import React from "react";
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
        
        {/* <LoginArea /> */}
        <LocationField prop={this.props} />
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

export default Home;
