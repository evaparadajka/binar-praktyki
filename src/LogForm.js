import React from "react";

import Button from "./user-inferface/Button";
import styled from 'styled-components';
class LogForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: "you@gmail.com",
			password: "",
		}
	}

	updateMail = e =>{
		this.setState({
		email: e.target.value,
		});
	}

	updatePass = e =>{
		this.setState({
		password: e.target.value,
		});
	}

	onSubmit= event =>{
		event.preventDefault();
		this.props.onSubmit({
		email: this.state.email,
		password: this.state.email,
		});
	}

	onSubmitOut= event =>{
		event.preventDefault();
		this.props.onSubmit({
		email: "guest"
		});
	}

	render(){
	return(

		<form><div className="panel panel-default" >
			<div className="row" style={{padding:'5px'}}>
				<div className="col-md-4">
					<label>Email</label><br/>
					<input
						className="form-control"
						style={{width:'200px'}}
						onChange={this.updateMail}
						value={this.state.email} />
						<label>Password</label><br/>
						<input
							className="form-control"
							style={{width:'200px'}}
							onChange={this.updatePass}
							value={this.state.password} />
				</div>

				<div  >
				<Button className="btn btn-success" label="Sing in" onClick={this.onSubmit}/>
				<Button className="btn btn-success" label="Sing out" onClick={this.onSubmitOut}/>
				</div>
			</div></div>
		</form>


	);
	}
}



export default LogForm;
