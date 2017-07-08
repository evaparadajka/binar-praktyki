import React from "react";

import Button from "../user-interface/Button";
import StyledPost from "../user-interface/StyledPost";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.timestamp;
  }

  remove = () => {
    this.props.Delete(this.props.timestamp);
  };

  show = () => {
    this.props.Show(this.props.timestamp);
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
          <br />
          <div className="row" style={{ marginRight: "0%" }}>
            <Button onClick={this.remove} label="DELETE" />
            <Button onClick={this.show} label="SHOW" />
          </div>
        </StyledPost>
      </div>
    );
  }
}

export default Post;
