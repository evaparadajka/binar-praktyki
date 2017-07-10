import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import apiClient from "../lib/api-client";
import axios from "axios";

import _ from "lodash";

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

  delete = key => {
    console.log("POst id", key);
    apiClient
      .delete("/example/api/v1/posts/" + key, {
        headers: {
          "X-User-Email": this.props.session.email,
          "X-User-Token": this.props.session.token
        }
      })
      .then(response => {
        console.log(response);
        this.fetchPosts();
        this.props.router.push("posts");
      })
      .catch(error => {
        console.error(error);
      });
  };
  //this.props.dispatch({ type: "DELPOST", PostId: key });
  // this.setState({
  // posts: this.state.posts.filter(p=> p.timestamp!==timestamp),
  // });

  show = key => {
    this.props.dispatch({ type: "SHOW", key: key });
    this.props.router.push("/posts-details/" + key);
  };

  search = event => {
    event.preventDefault();
    this.setState({
      phase: event.target.value
    });
  };

  fetchPosts() {
    console.log(this.props.session);
    apiClient
      .get("/example/api/v1/posts", {
        headers: {
          "X-User-Email": this.props.session.email,
          "X-User-Token": this.props.session.token
        }
      })
      .then(response => {
        this.props.dispatch({
          type: "FETCH_POSTS",
          payload: response.data.posts
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const postsToRender = this.props.posts.postsCollection
      .filter(p => p.title.includes(this.state.phase))
      .sort((a, b) => a.id - b.id)
      .reverse();

    /*
      const orderedPosts = _.orderBy(postsToRender, ["title"])
    */

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
        <PostList Delete={this.delete} Show={this.show} posts={postsToRender} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    session: state.user
  };
};

export default connect(mapStateToProps)(withRouter(PostPage));
