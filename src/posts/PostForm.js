import React from "react";

import Button from "../user-interface/Button";
import StyledPost from "../user-interface/StyledPost";
import styled from "styled-components";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Name your post here",
      body: "Write your post here"
    };
  }

  updateName = event => {
    this.setState({
      title: event.target.value
    });
  };

  updateName1 = event => {
    this.setState({
      body: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body
    });
  };

  render() {
    return (
      <form>
        <StyledPost>
          <div>
            <div className="row" style={{ padding: "2%" }}>
              <div className="col-md-12">
                <label>Post tilte: </label>
                <br />
                <input
                  className="form-control"
                  style={{ width: "100%" }}
                  onChange={this.updateName}
                  value={this.state.title}
                />
                <br />
                <label>Post text: </label>
                <br />
                <input
                  className="form-control"
                  style={{ width: "100%" }}
                  onChange={this.updateName1}
                  value={this.state.body}
                />
                <br />
                <Button
                  className="btn btn-success"
                  label="ADD"
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

export default PostForm;
