import React from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../Images/logo.png"
import AddIcon from '@material-ui/icons/Add';
import AppModal from "./modal";

import LoginArea from './loginarea'
import { connect } from "react-redux";


function LocationField(props) {
  console.log("NAvbar==>",props)
  let bodCol = () => {
    document.getElementById("lock").style.borderColor = "#40e0d0";
  };

  let bodNorm = () => {
    document.getElementById("lock").style.borderColor = "#002f34";
  };

  return (
    <div className="location">

      <div>
      <img width="50px" src={Logo} />
      </div>

      <div className="box-1" id="lock">
        <SearchIcon  style={{fontSize:"30px",marginTop:"5px"}} />
        <input
          className="loctionInput"
          type="text"
          value="Pakistan"
          onFocus={() => bodCol()}
          onBlur={() => bodNorm()}
        ></input>
        <IconButton size="small" style={{ outline: "none" }}>
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </div>

      {/* <div className="product">
        <input type="text"></input>
        <button
          size="small"
          style={{ outline: "none", backgroundColor: "#002f34" }}
        >
          <SearchIcon fontSize="large" />
        </button>
      </div> */}

      <div style={{ margin: "2px",height:"45px",width:"550px",display:"flex"}}>
        <ButtonGroup variant="text" className="hov" style={{width:"100%"}} >
          <input className="group" type="text" placeholder="Find Cars, Mobile Phones and more..." ></input>
          <Button>
            <SearchIcon fontSize="large" />
          </Button>
        </ButtonGroup>
      </div>

      <div className="sell">
        {/* <a className="login" href="#">Login</a> */}
        {props.currentUser && props.currentUser.length > 0 ? <LoginArea avatar={props.currentUser[0].avatar} /> : <AppModal />}
        {/* <AppModal /> */}

        <button 
        className="sell-btn" 
        onClick={()=>props.prop.history.push('/post')}
        >

        <AddIcon style={{ color:"#002f34",padding:"1px",fontWeight: "bold" }} />
        <p style={{ marginLeft: "2px",padding:"2px", color:"#002f34",fontSize: "14px",fontWeight: 700,letterSpacing: ".5px" }}>SELL</p>
        </button>
      </div>

    </div>

  );
}


const mapStateToProps = (state) => ({
  // users: state.users,
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, null)(LocationField);
