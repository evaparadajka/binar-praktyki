import React from "react";

import PostList from "./PostList";

class ParityList extends React.Component{
  render(){
    let postsWithIndex = this.props.posts.map((val, index) => {
      let newTitle;
      if (index%2 === 0) {
        newTitle = val.title +  " Even";
      }
      else {
        newTitle = val.title + " Odd";
      }
      return {...val, title: newTitle};
    });

    return(
      <PostList {...this.props} posts={postsWithIndex} />
    );
  }
}

export default ParityList;
