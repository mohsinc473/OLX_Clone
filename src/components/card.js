import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardImage from "../Images/hero_bg_pk.jpg";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: 10,
    border: "1px solid rgba(0,47,52,.2)",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  console.log("Card==>",props);


  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          // avatar={
          //   <Avatar aria-label="recipe" className={classes.avatar}>
          //     R
          //   </Avatar>
          // }
          action={
            <IconButton aria-label="settings">
              <FavoriteBorderIcon />
            </IconButton>
          }
          // title="Shrimp and Chorizo Paella"
          // subheader="September 14, 2016"
        />

        <CardActionArea onClick={()=>props.prop.prop.history.push('/product')} >
          <CardMedia
            style={{margin:"0px 10px"}}
            className={classes.media}
            image={props.cardData.imageURL}
            title="Contemplative Reptile"
          />

          <CardContent>
            <Typography style={{color:"#002f34",fontWeight: 700,fontSize:"20px"}} gutterBottom variant="h5" component="h2">
              Rs {props.cardData.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.cardData.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
