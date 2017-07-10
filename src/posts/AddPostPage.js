import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import apiClient from "../lib/api-client";

import PostForm from "./PostForm";

class AddPostPage extends React.Component {
  addPost = post => {
    apiClient
      .post(
        "/example/api/v1/posts",
        {
          post: {
            title: post.title,
            body: post.body,
            user_id: this.props.session.id
          }
        },
        {
          headers: {
            "X-User-Email": this.props.session.email,
            "X-User-Token": this.props.session.token
          }
        }
      )
      .then(response => {
        console.log(response);

        this.props.router.push("posts");
      })
      .catch(error => {
        console.error(error);
      });
  };

  // addPost = post => {
  //   this.props.dispatch({
  //     type: "ADDPOST",
  //     post: { ...post, timestamp: new Date().getTime() }
  //   });
  //   this.props.router.push("posts");
  //   // this.setState({
  //   // posts:  [...this.state.posts, {...post,timestamp:new Date().getTime()}],
  //   // });
  // };

  render() {
    return (
      <div>
        <PostForm onSubmit={this.addPost} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    session: state.user
  };
};

export default connect(mapStateToProps)(withRouter(AddPostPage));
