import React from "react";
import {connect} from 'react-redux';

class PostDetails extends React.Component{
	render(){
		return (
			<div>
	      <h3>Posts timestamp:</h3>
				<div>{this.props.post.timestamp}</div>
				<h3>Post title:</h3>
				<div>{this.props.post.title}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return{
		post: state.posts.postToShow
  };
};

export default connect(mapStateToProps)(PostDetails);
