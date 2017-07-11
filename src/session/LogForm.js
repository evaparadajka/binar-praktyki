import React from "react";
import { connect } from "react-redux";

import Button from "../user-interface/Button";
import StyledPost from "../user-interface/StyledPost";
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
                <br />
                <Button
                  className="btn btn-success"
                  label="SING IN"
                  onClick={this.onSubmit}
                />
              </div>
            </div>
            <a>
              {this.props.status}
            </a>
            <a href="/#/registration">Create an account</a>
          </div>
        </StyledPost>
      </form>
    );
  }
}

const mapStateToProps = state => {
  status: state.user.status;
};

export default connect(mapStateToProps)(LogForm);
