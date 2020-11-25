import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MediaCard from "./card";
import { connect } from "react-redux";

function SimpleContainer(props) {
  // console.log("grid==>", props);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <Grid container spacing={0}>
          {props.card.map((data) => (
            <Grid key={data.id} item xs={12} md={6} lg={3}>
              <MediaCard
                price={data.price}
                title={data.title}
                imageURL={data.imageURL}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  card: state.cards,
});

export default connect(mapStateToProps, null)(SimpleContainer);
