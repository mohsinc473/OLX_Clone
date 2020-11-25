import React from "react";
import LocationField from "../components/navbar";
import SimpleMenu from "../components/breadcrum";
import Footer from "../components/footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Advertisement from "../Images/advertise.PNG"

import Carousel from "react-bootstrap/Carousel";

class ProductPage extends React.Component {
  render() {
    console.log("Product==>",this.props)
    return (
      <div>

        <LocationField />
        <SimpleMenu />

        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
            <div className="advertisement">
                <img src={Advertisement}></img>

            </div>
            <div
              className="Main"
              style={{ display: "flex", marginTop: "60px" }}
            >
              <div className="leftSide" style={{ width: "66.67%" }}>
                <div className="crousal">
                  <Carousel>
                    <Carousel.Item interval={1000}>
                      <img
                        width="100%"
                        height="500px"
                        className="d-block w-100"
                        src="https://www.dpreview.com/files/p/articles/3210487912/MacBook_Pro_13-inch_4.jpeg"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                            <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                            </p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        width="100%"
                        height="500px"
                        className="d-block w-100"
                        src="https://cdn.vox-cdn.com/thumbor/Zzrc7PVxf-WrGZ4dz86If0J8Mic=/0x0:2040x1360/1200x675/filters:focal(872x759:1198x1085)/cdn.vox-cdn.com/uploads/chorus_image/image/64748492/akrales_190711_3536_0019.0.jpg"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                            </p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        width="100%"
                        height="500px"
                        className="d-block w-100"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825197207"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                            <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                            </p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>

                <div className="description">
                  <h3>Description</h3>
                  <p>Latest model of 13.3inch Macbook Pro</p>
                  <p>2020</p>
                  <p>Magic Keyboard</p>
                  <p>Eligible for warranty in Pakistan</p>
                  <p>Core i5 quad core 2.0GHz 10th Generation</p>
                  <p>16 GB RAM</p>
                  <p>1TB SSD</p>
                  <p>TOUCH BAR TOUCH ID</p>
                </div>
              </div>
              {/* Other side */}
              <div
                className="rightSide"
                style={{ width: "33.33%", marginLeft: "20px" }}
              >
                <div className="price">
                  <h3>
                    Rs 295,000
                    <span style={{ float: "right" }}>
                      <FavoriteBorderOutlinedIcon />
                    </span>
                    <span style={{ float: "right", marginRight: "15px" }}>
                      <ShareOutlinedIcon />
                    </span>
                  </h3>
                  <p>Macbook Pro 2020 13.3inch</p>
                  <p style={{ fontSize: "12px" }}>
                    F-6, Islamabad, Islamabad Capital Territory
                    <span style={{ float: "right" }}>Today</span>
                  </p>
                </div>

                <div className="price">
                  <h3 style={{ fontSize: "20px" }}>Posted in</h3>
                  <p style={{ fontSize: "12px" }}>
                    F-6, Islamabad, Islamabad Capital Territory
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13272.586160087909!2d73.06576508160764!3d33.73102663653766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf7769d89d8d%3A0x5d6d89877331b187!2sF-6%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1604758971818!5m2!1sen!2s"
                    
                    frameborder="0"
                    style={{width:"95%",height:"350"}}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </Container>
        </React.Fragment>

        <Footer />
      </div>
    );
  }
}

export default ProductPage;
