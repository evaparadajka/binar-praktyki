import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../user-interface/Button';

class PostList extends React.Component{
  render(){
    return(
      <div>
        {this.props.posts.map(p=>
          <Post onRemove={this.props.onRemove} key={p.timestamp} title={p.title} text={p.text} timestamp={p.timestamp} />,
        )}
      </div>
    );
  }
}

class Post extends Component {
remove = () => {
  this.props.onRemove(this.props.timestamp);
};

  render(){
    return(
      <div style={{display: "flex", justifyContent: "space-between", border: "1px solid #ddd", backgroundColor: "#eae", padding: "1px"}}>
      <p>title: {this.props.title}</p>
      <p>text: {this.props.text}</p>
      <p>timestamp: {this.props.timestamp}</p>
      <Button onClick={this.remove} label={"delete"}/>
      </div>
    );
  }
}

export default PostList;
