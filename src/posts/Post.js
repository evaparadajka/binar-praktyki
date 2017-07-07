import React from "react";

import Button from "../user-interface/Button";
import styled from 'styled-components';

class Post extends React.Component {
  constructor(props){
    super(props);
    this.id = this.props.timestamp;
  }

  remove = () => {
    this.props.Usun(this.props.timestamp);
  }

  show = () => {
    this.props.Show(this.props.timestamp);
  }

  render() {
    return (
      <div>
        <StyledPost >
          <div>title: {this.props.title} </div>
          <div>timestamp: {this.props.timestamp}</div><br/>
          <Button onClick={this.remove} label="USUN" />
          <Button onClick={this.show} label="SHOW" />
        </StyledPost>
      </div>
    );
  }
}

const StyledPost = styled.div`
border:1px solid #aaa;
background-color: #ddd;
padding: 5px;
margin-bottom: 5px;
dispaly:flex;
justifyContent: space-between;
&:hover{
  opacity:0.7;
}
`;

export default Post;
