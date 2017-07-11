import React from "react";
import ReactDOM from "react-dom";
import apiClient from "../lib/api-client";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import RegForm from "./RegForm";

class Reg extends React.Component {
  register = user => {
    if (user.password === user.password1) {
      apiClient
        .post("/api/v1/registrations", {
          user: { email: user.email, password: user.password }
        })
        .then(response => {
          console.log(response);
          alert("Your registration is completed.");
          this.props.router.push("/log");
        })
        .catch(error => {
          console.log(error);
          alert("Something went wrong");
          this.props.router.push("/reg");
        });
    } else {
      alert("Incorrect passwords");
    }
  };

  render() {
    return (
      <div>
        <div />
        <RegForm onSubmit={this.register} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(withRouter(Reg));
