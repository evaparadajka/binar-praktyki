import React from "react";

import Button from "../user-interface/Button";
import styled from "styled-components";

class RegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "you@gmail.com",
      password: "",
      password1: ""
    };
  }

  updateMail = e => {
    this.setState({
      email: e.target.value
    });
  };

  updatePass = e => {
    this.setState({
      password: e.target.value
    });
  };

  updatePass1 = e => {
    this.setState({
      password1: e.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password,
      password1: this.state.password1
    });
  };

  render() {
    return (
      <form>
        <div className="panel panel-default">
          <div className="row" style={{ padding: "5px" }}>
            <div className="col-md-4">
              <label>Email</label>
              <br />
              <input
                className="form-control"
                style={{ width: "200px" }}
                onChange={this.updateMail}
                value={this.state.email}
              />
              <label>Password</label>
              <br />
              <input
                className="form-control"
                style={{ width: "200px" }}
                onChange={this.updatePass}
                value={this.state.password}
              />
              <label>Repeat password</label>
              <br />
              <input
                className="form-control"
                style={{ width: "200px" }}
                onChange={this.updatePass1}
                value={this.state.password1}
              />
            </div>
            <div>
              <Button
                className="btn btn-success"
                label="Register"
                onClick={this.onSubmit}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default RegForm;
