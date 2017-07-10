import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import { StyledPreNavR, StyledPreNavL } from "./user-interface/StyledPreNav";
import StyledNavbar from "./user-interface/StyledNavbar";

class Layout extends React.Component {
  logOut = () => {
    this.props.dispatch({ type: "LOGOUT" });
    //jakos odswiezyc strone
    window.location.reload();
  };

  render() {
    return (
      <div>
        <div>
          <StyledPreNavL>
            {this.props.postsCount > 0
              ? `Posts amount: ${this.props.postsCount}`
              : "You don't have any posts."}
          </StyledPreNavL>
          <StyledPreNavR>
            Welcome, {this.props.user}{" "}
            <button onClick={this.logOut}>Log Out</button>
          </StyledPreNavR>
        </div>
        <br />
        <br />
        <StyledNavbar>
          <nav className="navbar">
            <ul className="nav navbar-nav">
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="/posts">Post List</Link>
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
            </ul>
          </nav>
        </StyledNavbar>
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
