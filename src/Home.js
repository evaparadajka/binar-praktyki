import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class Home extends React.Component {
  increment = () => this.props.dispatch({ type: "INCREMENT" });
  decrement = () => this.props.dispatch({ type: "DECREMENT" });

  render() {
    return (
      <div>
        <button onClick={this.decrement}>decrement</button> counter:{" "}
        {this.props.counter} <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(Home);
