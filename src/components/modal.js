import React from "react";
import { Modal } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../App.css";
import LoginArea from "./loginarea"

import { connect } from "react-redux";
import {facebookLogin} from "../store/action/funcs"

function MyVerticallyCenteredModal(props) {
  console.log("Modal Props==>",props);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Header>

      <Modal.Body>
        <button className="authUi" 
        onClick={()=> {props.prop.facebookLogin()}}
        >
          <span className="fbLogin">
            <FacebookIcon />
          </span>
          Continue with facebook
        </button>
        {/* <button className="authUi" onClick={()=> props.prop.facebookLogin()}>
          Continue with google
        </button> */}
      </Modal.Body>

      <div className="modalFoot">
        <span>We won't share your personal details with anyone</span>
      </div>

      <div className="modalEnd">
        <p>
          If you continue, you are accepting
          <a href="#">OLX Terms and Conditions and Privacy Policy</a>
        </p>
      </div>
    </Modal>
  );
}

function AppModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  // console.log("Props=> ",props);
  return (
    <>
      <a className="login" id="loginTag" onClick={() => setModalShow(true)}>
        {/* {props.prop.currentUser ? <LoginArea /> : "Login"} */}
        Login
      </a>
      

      <MyVerticallyCenteredModal
        prop={props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  // users: state.users,
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  facebookLogin: ()=> dispatch(facebookLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppModal);

