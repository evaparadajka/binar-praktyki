import React from "react";
import PostForm from "./PostForm.js";
import PostList from "./PostList.js";
import styled from 'styled-components';
import ButtonAlert from '../user-inferface/ButtonAlert'
import ParityList from './ParityList';
import {connect} from 'react-redux';

class PostPage extends React.Component{
    	constructor(props){
	super(props);
	this.state = {
		fraza:"",

	};
	this.props.injectedProp(this.props.posts.postsCollection.length);
	}



	usun = timestamp => {
    this.props.dispatch({type: "DELPOST", timestamp: timestamp})
	// 	this.setState({
	// 	posts: this.state.posts.filter(p=> p.timestamp!==timestamp),
	// });
	this.props.injectedProp(this.props.posts.postsCollection.length -1);
	}


	Szukaj = (e) =>{
		e.preventDefault();
		this.setState({
		fraza: e.target.value,
		});
	}
render(){
    	const postsToRender = this.props.posts.postsCollection.filter
      (p=> p.title.includes(this.state.fraza)).reverse();

	return(
		<div>
			{this.props.injectedProp}

		<ButtonAlert label="cc" onClick={this.props.injectedProp} />
			<form>
				<label>Wyszukiwanie</label>
				<input className="form-control"
				style={{width:'800px',marginBottom:'10px'}}
				onChange={this.Szukaj} value={this.state.fraza}/>
			</form>
			<PostList Usun={this.usun} posts={postsToRender}/>

		</div>);
	}


}

const StyledPostList = styled(PostList)`
margin-top:20px;
`;

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(PostPage);