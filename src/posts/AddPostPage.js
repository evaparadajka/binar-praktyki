// nowa podstrona AddPostPage
//przeniesc koponent PostForm do AddPostPage
//polaczyc komponent AddPostPage ze storem za pomaca connect

import React from 'react';
import {connect} from 'react-redux';
import PostForm from './PostForm';
import {withRouter} from 'react-router';

class AddPostPage extends React.Component{
  addPost = post => {
    this.props.dispatch({type: "ADDPOST", post: {...post, timestamp: new Date().getTime()}});
    this.props.router.push("posts");
    // this.setState({
    // 	posts:  [...this.state.posts, {...post,timestamp:new Date().getTime()}],
    //
    // });
    //
    //this.props.injectedProp(this.props.posts.length+1);
  }

  render(){
    return (
      <div>
        <PostForm onSubmit={this.addPost} />
      </div>);
  }
}

const mapStateToProps = (state) => {
  return{

  };
};

export default connect(mapStateToProps)(withRouter(AddPostPage));
