import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: "",
      text: "",
    };
  }

  updateName1 = e => {
    this.setState({
        title: e.target.value,
    });
  };

  updateName2 = e => {
    this.setState({
        text: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      title: this.state.title,
      text: this.state.text,
    });
  };

  render()
  {
    return(
      <form>
        <label>Title: </label>
        <input onChange={this.updateName1} value={this.state.title}/>
        <label>Textt: </label>
        <input onChange={this.updateName2} value={this.state.text}/>
        <button onClick={this.onSubmit}>add post</button>
      </form>
    )
  }
}

export default PostForm;
