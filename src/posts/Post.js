import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import Button from "../user-interface/Button";
import StyledPost from "../user-interface/StyledPost";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.key;
  }

  remove = () => {
    this.props.Delete(this.props.id);
  };

  show = () => {
    this.props.Show(this.props.id);
  };

  render() {
    return (
      <div className="col-md-6">
        <StyledPost>
          <div>
            Title: {this.props.title}{" "}
          </div>
          <div>
            Timestamp: {this.props.timestamp}
          </div>
          <div>
            Post ID: {this.props.id}
          </div>
          <div className="row" style={{ marginRight: "0%" }}>
            <Button onClick={this.remove} label="DELETE" />
            <Button onClick={this.show} label="SHOW" />
          </div>
        </StyledPost>
      </div>
    );
  }
}

//export default Post;

const mapStateToProps = state => {
  return {
    posts: state.posts,
    session: state.user
  };
};

export default connect(mapStateToProps)(Post);
