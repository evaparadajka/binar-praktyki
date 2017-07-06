import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import LogForm from './LogForm';
import {withRouter} from 'react-router';
import axios from 'axios';

class Logowanie extends React.Component{
  logIn = user => {
    axios.post('http://192.168.10.127:3001/sign-in',
  {
    email: user.email,
    password: user.password
  }).then((response) =>
    console.log(response)
  .catch(error => {
    console.log(error)
  }))
    //this.props.dispatch({type: 'LOGIN', userMail: user.email})
    this.props.router.push("/")
  }

  logOut = () => {
    this.props.dispatch({type: 'LOGOUT'})
    this.props.router.push("/")
  }

  render(){
    return (
      <div>
        <div>Logowanie</div>
        <LogForm onSubmit={this.logIn} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{

  };
};

export default connect(mapStateToProps)(withRouter(Logowanie));
