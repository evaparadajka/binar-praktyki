import React, { Component } from "react";
//import logo from "./logo.svg";
//import PropTypes from "prop-types";
// import "./App.css";


import {Router, Route, IndexRoute, Link, hashHistory} from "react-router";
import Home from "./Home";
import PostPage from "./posts/PostPage";
import PostsDetails from "./posts/PostsDetails";
import AddPostPage from "./posts/AddPostPage";
import Layout from "./Layout";
import Logowanie from "./Logowanie";



class App extends Component{

	render() {
		return (
		<div className="App" style={{padding:'5px'}}>
			<Router history={hashHistory} >
				<Route path='/' component={Layout}>
					<IndexRoute component={Home}></IndexRoute>
					<Route path="posts" component={PostPage} />
					<Route path="posts-details" component={PostsDetails} />
					<Route path="posts-add" component={AddPostPage} />
					<Route path="log" component={Logowanie} />
				</Route>
			</Router>

		</div>
		);
	}
}




export default App;
