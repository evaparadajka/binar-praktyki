import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";

class Layout extends React.Component{

    constructor(props){
            super(props);

    this.state = {
        licznik:0

    };


}

zmienlicznik = (liczba) =>{
this.setState(
    this.state = {
        licznik: liczba
    }

);
}

render(){
    return(
        <div>
        <nav className="navbar navbar-default">

             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">

                    <li className="">{this.props.postsCount >0 ? `Liczba postów: ${this.props.postsCount}` : "Nie masz postów"}</li>

                    <li className=""><Link to="/">home</Link></li>
                    <li className=""><Link to="/posts">Post List</Link></li>
                    <li className=""><Link to="/posts-details">Post Details</Link></li>
                    <li className=""><Link to="/posts-add">Post Add</Link></li>
                    <li className=""><Link to="/log">Sign in</Link></li>
                    <li className="">Welcome, {this.props.user}</li>
                </ul>
            </div>
        </nav>
                <div className="container">
                    {React.Children.map(this.props.children, (c) => React.cloneElement(c,{injectedProp: this.zmienlicznik}))}

                </div>
        </div>
    );
}


}


const mapStateToProps = (state) => {
  return{
    postsCount: state.posts.postsCollection.length,
    user: state.user
  };
};

export default connect(mapStateToProps)(Layout);
