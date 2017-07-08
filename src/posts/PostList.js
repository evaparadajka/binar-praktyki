import React, { Component } from "react";

import Post from "./Post";

class PostList extends Component {
  usun = post => {
    console.log(post.id);
  };

  show = post => {
    console.log(post.id);
  };

  render() {
    return (
      <div className={this.props.className}>
        {this.props.posts.map((d, index) =>
          <Post
            Delete={this.props.Delete}
            Show={this.props.Show}
            key={d.timestamp}
            title={d.title}
            timestamp={d.timestamp}
          />
        )}
      </div>
    );
  }
}

export default PostList;
