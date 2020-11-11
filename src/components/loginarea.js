import React from "react";
import { BsChat } from "react-icons/bs";
import { CgBell } from "react-icons/cg";
import IconButton from "@material-ui/core/IconButton";
import Avatar from '@material-ui/core/Avatar';


class LoginArea extends React.Component {
  render() {
      console.log("Avatar==>",this.props.avatr)
    return (
      <div>
        <IconButton>
          <BsChat />
        </IconButton>
        <IconButton>
          <CgBell />
        </IconButton>
        <Avatar  src={this.props.avatr} />
      </div>
    );
  }
}

export default LoginArea;
