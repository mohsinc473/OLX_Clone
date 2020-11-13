import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MediaCard from "./card";
import { connect } from "react-redux";


function SimpleContainer(props) {
  console.log("grid==>",props)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <Grid container spacing={0}>
        <Grid item xs={12} md={6} lg={3}>
        <MediaCard prop={props} cardData={props.card[0]}/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <MediaCard prop={props} cardData={props.card[1]}/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <MediaCard prop={props} cardData={props.card[2]}/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <MediaCard prop={props} cardData={props.card[3]}/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <MediaCard prop={props} cardData={props.card[4]}/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <MediaCard prop={props} cardData={props.card[5]}/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <MediaCard prop={props} cardData={props.card[6]}/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <MediaCard prop={props} cardData={props.card[7]}/>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  card: state.cards,
});

export default connect(mapStateToProps, null)(SimpleContainer);
