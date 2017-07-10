import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import LogForm from "./LogForm";

class Log extends React.Component {
  logIn = user => {
    axios
      .post("https://praktyki-react.herokuapp.com/api/v1/sessions", {
        user: { email: user.email, password: user.password }
      })
      .then(response => {
        console.log(response.data.data.email);
        this.props.dispatch({
          type: "LOGIN",
          data: {
            email: response.data.data.email,
            token: response.data.data.auth_token,
            id: response.data.data.user_id
          }
        });
        this.setState({ email: "", password: "" });
        this.props.router.push("posts");
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: "Incorrect email or password" });
        alert("Incorrect email or password");
      });

    // axios
    //   .post("https://praktyki-react.herokuapp.com/api/v1/sessions", {
    //     user: { email: user.email, password: user.password }
    //   })
    //   .then(response => {
    //     console.log(response);
    //     this.props.dispatch({ type: "LOGIN", email: user.email });
    //     this.props.router.push("/");
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     alert("Incorrect email or password");
    //     this.props.router.push("/log");
    //   });
    //this.props.dispatch({type: 'LOGIN', userMail: user.email})
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
