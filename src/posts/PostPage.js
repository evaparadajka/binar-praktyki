import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import PostForm from "./PostForm.js";
import PostList from "./PostList.js";
import ParityList from "./ParityList";

import styled from "styled-components";
import ButtonAlert from "../user-interface/ButtonAlert";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: ""
    };
  }

  usun = timestamp => {
    this.props.dispatch({ type: "DELPOST", timestamp: timestamp });
    // this.setState({
    // posts: this.state.posts.filter(p=> p.timestamp!==timestamp),
    // });
  };

  show = timestamp => {
    this.props.dispatch({ type: "SHOW", timestamp: timestamp });
    this.props.router.push("/posts-details");
  };

  search = event => {
    event.preventDefault();
    this.setState({
      phase: event.target.value
    });
  };

  render() {
    const postsToRender = this.props.posts.postsCollection
      .filter(p => p.title.includes(this.state.phase))
      .reverse();

    return (
      <div>
        {this.props.injectedProp}
        <form>
          <label>Search</label>
          <input
            className="form-control"
            style={{ width: "100%", marginBottom: "2%" }}
            onChange={this.search}
            value={this.state.phase}
          />
        </form>
        <PostList Delete={this.usun} Show={this.show} posts={postsToRender} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(withRouter(PostPage));
