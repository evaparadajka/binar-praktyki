import React from "react";

import Button from "../user-interface/Button";
import styled from "styled-components";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Name your post here",
      text: "Write your post here"
    };
  }

  updateName = event => {
    this.setState({
      title: event.target.value
    });
  };

  updateName1 = event => {
    this.setState({
      text: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      title: this.state.title,
      text: this.state.text
    });
  };

  render() {
    return (
      <form>
        <div className="panel panel-default">
          <div className="row" style={{ padding: "5px" }}>
            <div className="col-md-4">
              <label>Post tilte: </label>
              <br />
              <input
                className="form-control"
                style={{ width: "200px" }}
                onChange={this.updateName}
                value={this.state.title}
              />
              <br />
              <label>Post text: </label>
              <br />
              <input
                className="form-control"
                style={{ width: "200px" }}
                onChange={this.updateName1}
                value={this.state.text}
              />
            </div>
            <div>
              <Button
                className="btn btn-success"
                label="Add"
                onClick={this.onSubmit}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default PostForm;
