import React from "react";
import ReactDOM from "react-dom";
import apiClient from "../lib/api-client";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import LogForm from "./LogForm";
import { signIn } from "./session-actions";

class Log extends React.Component {
  logIn = user => {
    this.props.dispatch(signIn({ email: user.email, password: user.password }));
  };

  render() {
    return (
      <div>
        <div />
        <LogForm onSubmit={this.logIn} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(withRouter(Log));
