import React, { Component } from "react";
import { Router, Route, IndexRoute, Link, hashHistory } from "react-router";
//import logo from "./logo.svg";
//import PropTypes from "prop-types";
// import "./App.css";

import Home from "./Home";
import PostPage from "./posts/PostPage";
import PostsDetails from "./posts/PostsDetails";
import AddPostPage from "./posts/AddPostPage";
import Layout from "./Layout";
import Log from "./session/Log";
import Reg from "./session/Reg";

class App extends Component {
  authenticateUser = (nextState, replace) => {
    const state = this.props.store.getState();
    if (false /*!state.session.token czy user nie jest zalogowany */) {
      replace({
        pathname: "log"
      });
    }
  };
  render() {
    return (
      <div className="App" style={{ padding: "5px" }}>
        <Router history={hashHistory}>
          <Route path="/" component={Layout} onEnter={this.authenticateUser}>
            <IndexRoute component={Home} />
            <Route path="posts" component={PostPage} />
            <Route path="posts-details" component={PostsDetails} />
            <Route path="posts-add" component={AddPostPage} />
          </Route>
          <Route path="log" component={Log} />
          <Route path="registration" component={Reg} />
        </Router>
      </div>
    );
  }
}

export default App;
