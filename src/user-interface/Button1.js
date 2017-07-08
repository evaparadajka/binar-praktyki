import React from "react";

class Button1 extends React.Component {
  render() {
    return (
      <button
        className="btn btn-success"
        style={{
          color: "white",
          backgroundColor: "#d47e8c",
          borderColor: "#aaa",
          width: "20%",
          height: "100%",
          textAlign: "center",
          margin: "1%"
        }}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button1;
