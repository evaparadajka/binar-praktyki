import React from "react";

import Button from "../user-interface/Button";
import styled from "styled-components";

class LogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "you@gmail.com",
      password: ""
    };
  }

  updateMail = event => {
    this.setState({
      email: event.target.value
    });
  };

  updatePass = event => {
    this.setState({
      password: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password
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
            </div>
            <div>
              <Button
                className="btn btn-success"
                label="Sing in"
                onClick={this.onSubmit}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default LogForm;
