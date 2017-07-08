import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

class Layout extends React.Component {
  logOut = () => {
    this.props.dispatch({ type: "LOGOUT" });
    //jakos odswiezyc strone
    window.location.reload();
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li className="">
                {this.props.postsCount > 0
                  ? `Posts amount: ${this.props.postsCount}`
                  : "You don't have any posts."}
              </li>
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="/posts">Post List</Link>
              </li>
              <li className="">
                <Link to="/posts-details">Post Details</Link>
              </li>
              <li className="">
                <Link to="/posts-add">Post Add</Link>
              </li>
              <li className="">
                <Link to="/log">Sign in</Link>
              </li>
              <li className="">
                <Link to="/registration">Sign up</Link>
              </li>
              <li className="">
                Welcome, {this.props.user}
              </li>
              <li className="">
                <button onClick={this.logOut}>Log Out</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          {React.Children.map(this.props.children, c => React.cloneElement(c))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.email,
    token: state.user.token,
    postsCount: state.posts.count
  };
};

export default connect(mapStateToProps)(Layout);
