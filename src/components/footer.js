import React from "react";
import "../App.css"
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MediaCard from "./card";
import phonePhoto from "../Images/phone-app.png";
import AppStore from "../Images/appstore_2x.png";
import PlayStore from "../Images/playstore_2x.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
  return (
    <div style={{marginTop:"100px"}}>
      {/* Footer 1 container */}
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img src={phonePhoto}></img>
              </Grid>
              <Grid item xs={4}>
                <p
                  style={{
                    color: "#002f34",
                    fontSize: "34px",
                    fontWeight: 700,
                    lineHeight: "40px",
                    marginTop: "35px",
                    marginLeft: "35px",
                  }}
                >
                  TRY THE OLX APP
                </p>
                <p
                  style={{
                    color: "#002f34",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    marginLeft: "35px",

                  }}
                >
                  Buy, sell and find just about anything using the app on your
                  mobile.
                </p>
              </Grid>
              <Grid item xs={4}>
                <p
                  style={{
                    color: "#002f34",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    marginTop: "60px",
                    marginLeft: "15px",
                  }}
                >
                  GET YOUR APP TODAY
                </p>
                <img
                  style={{ width: "128px", height: "40px", marginRight: "8px",marginLeft: "15px" }}
                  src={AppStore}
                ></img>
                <img
                  style={{ width: "128px", height: "40px", marginRight: "8px" }}
                  src={PlayStore}
                ></img>
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      </div>

      {/* Footer 2 container */}
      <div style={{background: "#ebeeef",paddingTop:"15px",borderTop: "1px solid rgba(0,47,52,.2)"}}>
      <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <p style={{fontSize:"14px",fontWeight:700,color:"#002f34"}}>POPULAR CATEGORIES</p>
                <ul className="foot2">
                  <li>Cars</li>
                  <li>Flats for rent</li>
                  <li>Jobs</li>
                  <li>Mobile Phones</li>
                </ul>
              </Grid>
              <Grid item xs={2}>
              <p style={{fontSize:"14px",fontWeight:700,color:"#002f34"}}>TRENDING SEARCHES</p>
                <ul className="foot2">
                  <li>Bikes</li>
                  <li>Watches</li>
                  <li>Books</li>
                  <li>Dogs</li>
                </ul>
              </Grid>
              <Grid item xs={2}>
              <p style={{fontSize:"14px",fontWeight:700,color:"#002f34"}}>ABOUT US</p>
                <ul className="foot2">
                  <li>About OLX Group</li>
                  <li>OLX Blog</li>
                  <li>Contact US</li>
                  <li>OLX for Businesses</li>
                </ul>
              </Grid>
              <Grid item xs={2}>
              <p style={{fontSize:"14px",fontWeight:700,color:"#002f34"}}>OLX</p>
                <ul className="foot2">
                  <li>Help</li>
                  <li>Sitemap</li>
                  <li>Legal and Privacy Information</li>
                </ul>
              </Grid>
              <Grid item xs={3}>
              <p style={{fontSize:"14px",fontWeight:700,color:"#002f34"}}>FOLLOW US</p>
                <ul className="foot2 foot2Ul">
                  <li><FacebookIcon style={{width: "25px",height: "25px",paddingRight: "8px"}} /></li>
                  <li><TwitterIcon style={{width: "25px",height: "25px",paddingRight: "8px"}} /></li>
                  <li><YouTubeIcon style={{width: "25px",height: "25px",paddingRight: "8px"}} /></li>
                  <li><InstagramIcon style={{width: "25px",height: "25px",paddingRight: "8px"}} /></li>
                </ul>
                <div>
                  <img style={{ width: "85px", height: "25px", marginRight: "8px" }} src={AppStore}></img>
                  <img style={{ width: "85px", height: "25px", marginRight: "8px" }} src={PlayStore}></img>
                </div>
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      </div>  

      {/* Footer 3 container */}
      <div style={{background: "#002f34"}}>
      <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <p style={{color: "#fff",fontSize: "12px",margin:"5px"}}>Other Countries India - South Africa - Indonesia</p>
              </Grid>
              <Grid item xs={6}>
                <p style={{color: "#fff",fontSize: "12px",textAlign:"end",margin:"5px"}}>Free Classifieds in Pakistan. © 2006-2020 OLX</p>
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      </div>
    </div>
  );
}
