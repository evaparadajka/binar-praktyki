import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import PostForm from './posts/PostForm';
import PostList from './posts/PostList';
import Button from './user-interface/Button';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      znalezione: [],
      posts: [
        {title: "pierwszy", text: "text1", timestamp: 1},
        {title: "drugi", text: "text2 ewa", timestamp: 2},
        {title: "trzeci", text: "text3", timestamp: 3},
        {title: "czwarty", text: "text4 ewa", timestamp: 4},
        {title: "piaty", text: "text5", timestamp: 5},
        {title: "szosty", text: "text6", timestamp: 6},
        {title: "siodmy", text: "text7", timestamp: 7},
      ],
    };
  }

  addPost = post => {
    this.setState({
      posts: [
        ...this.state.posts,
        {...post, timestamp: new Date().toString()},
      ],
    });
  };

  deletePost = timestamp => {
    this.setState(
      {
        posts: this.state.posts.filter(p => p.timestamp!==timestamp),
      }
    )
  };

  findPost = (event) => {
    this.setState({
      znalezione: this.state.posts.filter(p => p.title===event.target.value || p.text===event.target.value),
    }
  )
};

  render(){
    return(
      <div className="App">
      <label>Find: </label>
      <input onChange={this.findPost} />

      <PostList posts={this.state.znalezione} onRemove={this.deletePost}/>

      <PostForm onSubmit={this.addPost}/>
      <PostList posts={this.state.posts} onRemove={this.deletePost}/>
      </div>
    );
  }
}

export default App;






class App1 extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


class ChildComponent extends React.Component{
  render(){
    return (<div> children component, {this.props.name}</div>);
  }
}

ChildComponent.defaultProps={
  name: "default name",
};

ChildComponent.propTypes={
  name: PropTypes.string.isRequired,
};

class Klasa extends Component {
  constructor(props) {
    super(props);
    this.state={
      wynik: 0,
      czasy: [],
    };
    this.funkcja=this.funkcja.bind(this);
  }

  funkcja(){
    this.setState({
      wynik: this.state.wynik+1,
      czasy: [...this.state.czasy, new Date().toISOString().slice(12,19)],
    });
  }


  render(){
    return (
      <div className='App'>
        <div>ech</div>
        <button onClick={this.funkcja}>kliknij</button>
        <span>{this.state.czasy.map(d=>
          <ChildComponent key={d} />)}
        </span>
      </div>
    );
  }
}
