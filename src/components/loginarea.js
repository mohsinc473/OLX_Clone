import React from "react";
import { BsChat } from "react-icons/bs";
import { CgBell } from "react-icons/cg";
import Avatar from '@material-ui/core/Avatar';

class LoginArea extends React.Component {
  render() {
      console.log("Avatar==>",this.props)
    return (
      <div className="loginArea">
        <button className="msgBtn">
          <BsChat className="loginMsg" />
        </button>
        <button className="msgBtn">
          <CgBell className="loginNotifi" />
        </button>
        <Avatar className="userPhoto"  src={this.props.avatar} />
      </div>
    );
  }
}

export default LoginArea;
