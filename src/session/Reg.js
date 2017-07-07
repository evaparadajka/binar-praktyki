import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import RegForm from "./RegForm";

class Reg extends React.Component {
  register = user => {
    axios
      .post("https://praktyki-react.herokuapp.com/api/v1/registrations", {
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
