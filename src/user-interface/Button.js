import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className="btn btn-success"
        style={{
          backgroundColor: "#d47e8c",
          borderColor: "#aaa",
          float: "right",
          textAlign: "center",
          marginLeft: "1%"
        }}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
