import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
      onClick={this.props.onClick}
      style={{color: "#444", border: "none", backgroundColor: "#eaa"}}>
      {this.props.label}
      </button>
    );
  }
}

export default Button;
