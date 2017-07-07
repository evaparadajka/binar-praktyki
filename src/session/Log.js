import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import LogForm from "./LogForm";

class Log extends React.Component {
  logIn = user => {
    axios
      .post("https://praktyki-react.herokuapp.com/api/v1/registrations", {
        user: { email: user.email, password: user.password }
      })
      .then(response => {
        console.log(response);
        this.props.dispatch({ type: "LOGIN", userMail: user.email });
        this.props.router.push("/");
      })
      .catch(error => {
        console.log(error);
        alert("Incorrect email or password");
        this.props.router.push("/log");
      });
    //this.props.dispatch({type: 'LOGIN', userMail: user.email})
  };

  logOut = user => {
    this.props.dispatch({ type: "LOGOUT", userMail: user.email });
    this.props.router.push("/");
  };

  render() {
    return (
      <div>
        <div />
        <LogForm onSubmit={this.logIn} onSubmitOut={this.logOut} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(withRouter(Log));
