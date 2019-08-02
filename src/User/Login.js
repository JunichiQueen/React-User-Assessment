import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component{
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
            console.log(response);
            console.log(response.data);
            this.setState({
                success: response.data.Status.toString(),
            })
        }).catch(err => {
            this.setState({
                error: "Not Logged In"
            })
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.login}>
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

export default Login;