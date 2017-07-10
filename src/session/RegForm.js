import React from "react";

import Button from "../user-interface/Button";
import StyledPost from "../user-interface/StyledPost";
import styled from "styled-components";

class RegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password1: ""
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

  updatePass1 = event => {
    this.setState({
      password1: event.target.value
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
      <form style={{ margin: "5% 30%" }}>
        <StyledPost>
          <div>
            <div className="row" style={{ padding: "2%" }}>
              <div className="col-md-12">
                <label>Email</label>
                <br />
                <input
                  className="form-control"
                  style={{ width: "100%" }}
                  onChange={this.updateMail}
                  value={this.state.email}
                />
                <label>Password</label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  style={{ width: "100%" }}
                  onChange={this.updatePass}
                  value={this.state.password}
                />
                <label>Repeat password</label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  style={{ width: "100%" }}
                  onChange={this.updatePass1}
                  value={this.state.password1}
                />
                <br />
                <Button
                  className="btn btn-success"
                  label="REGISTER"
                  onClick={this.onSubmit}
                />
              </div>
            </div>
          </div>
        </StyledPost>
      </form>
    );
  }
}

export default RegForm;
