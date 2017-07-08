import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import Button1 from "./user-interface/Button1";

class Home extends React.Component {
  increment = () => this.props.dispatch({ type: "INCREMENT" });
  decrement = () => this.props.dispatch({ type: "DECREMENT" });

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div className="col">
          <Button1 onClick={this.decrement} label="DECREMENT" />
          COUNTER: {this.props.counter}
          <Button1 onClick={this.increment} label="INCREMENT" />
        </div>
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
