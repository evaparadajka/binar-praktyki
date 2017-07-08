import React from "react";
import { connect } from "react-redux";

import StyledPost from "../user-interface/StyledPost";

class PostDetails extends React.Component {
  render() {
    return (
      <StyledPost>
        <div>
          <h4>Post timestamp:</h4>
          <div>
            {this.props.post.timestamp}
          </div>
          <br />
          <h4>Post title:</h4>
          <div>
            {this.props.post.title}
          </div>
          <br />
          <h4>Post text:</h4>
          <div>
            {this.props.post.text}
          </div>
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
