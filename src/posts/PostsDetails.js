import React from "react";
import { connect } from "react-redux";
import apiClient from "../lib/api-client";

import StyledPost from "../user-interface/StyledPost";

class PostDetails extends React.Component {
  componentDidMount() {
    apiClient
      .get("/example/api/v1/posts/" + this.props.params.id)
      .then(response => {
        console.log(response);
      })
      .catch(erroir => {});
  }

  render() {
    console.log(this.props);
    return (
      <StyledPost>
        <div>
          <h4>Post title:</h4>
          <div>
            {this.props.post.title}
          </div>
          <br />
          <h4>Post text:</h4>
          <div>
            {this.props.post.body}
          </div>
          <br />
          <h4>Post timestamp:</h4>
          <div>
            {this.props.post.created_at}
          </div>
          <br />
          <h4>Post ID:</h4>
          <div>
            {this.props.post.id}
          </div>
          <br />
          <h4>Created by:</h4>
          <div>
            {this.props.post.user_id}
          </div>
          <br />
        </div>
      </StyledPost>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts.postToShow
  };
};

export default connect(mapStateToProps)(PostDetails);
