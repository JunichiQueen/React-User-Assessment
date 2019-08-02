import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            success: "",
            error: ""
        }
    }
    login = (e) => {
        e.preventDefault();
        let name = e.target[0].value;
        let password = e.target[1].value;

        axios
        .get(`http://localhost:5000/user/name/${name}/${password}`).then(response => {
            if (response.data.Status.toString() == "Logged In"){
                this.setState({
                    success: response.data.Status.toString(),
                })
            }
            if (response.data.Status.toString() == "Not Logged In") {
                this.setState({
                    error: response.data.Status.toString()
                })
            }
        }).catch(err => {
            this.setState({
                error: "Bad Username"
            })
        });
    }
    render(){
        return(
            <div>
                <h2 className="text-center jumbotron">Login</h2>
                <form className="text-center jumbotron" onSubmit={this.login}>
                    <p>Username</p>
                    <input></input>
                    <p>Password</p>
                    <input></input>
                    <br></br>
                    <button type="submit">Login</button>
                    <p style={{color: 'green'}}>{this.state.success}</p>
                    <p style={{color: 'red'}}>{this.state.error}</p>
                </form>
            </div>
        )
    }
}
