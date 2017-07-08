import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import PostForm from "./PostForm";

class AddPostPage extends React.Component {
  addPost = post => {
    this.props.dispatch({
      type: "ADDPOST",
      post: { ...post, timestamp: new Date().getTime() }
    });
    this.props.router.push("posts");
    // this.setState({
    // posts:  [...this.state.posts, {...post,timestamp:new Date().getTime()}],
    // });
  };

  render() {
    return (
      <div>
        <PostForm onSubmit={this.addPost} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(withRouter(AddPostPage));
