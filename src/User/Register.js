import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            success: "",
            username: "",
            email: "",
            password: "",
            password2: ""
        }
    }

    createUser = (e) => {
        e.preventDefault();
        let newUser = {
            username: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            password2: e.target[3].value
        }
        axios
        .post("http://localhost:5000/user/createUser", newUser).then(response => {
            this.props.getAll();
            if (response.data.username){
                this.setState({
                    username: response.data.username.toString()
                })
            }
            if (response.data.email){
                    this.setState({
                        email: response.data.email.toString()
                    })
            }
            if (response.data.password){
                    this.setState({
                        password: response.data.password.toString()
                    })
            }
            if (response.data.password2){
                this.setState({
                    password2: response.data.password2.toString()
                })
            }
            if (response.data._id) {
                this.setState({
                    success: "You have created a user",
                    email: "",
                    password: ""
                })
            }

            console.log(response);
        }).catch(err => {
            console.log(err)
        });
    }
    render(){
        return(
            <div>
                <h1 className="text-center jumbotron">Register</h1>
                <form className="text-center" onSubmit={this.createUser}>
                    <p>Username</p>
                    <input></input>
                    <p style={{color: 'red'}}>{this.state.username}</p>
                    <p>Email</p>
                    <input></input>
                    <p style={{color: 'red'}}>{this.state.email}</p>
                    <p>Password</p>
                    <input></input>
                    <p style={{color: 'red'}}>{this.state.password}</p>
                    <p>Password2</p>
                    <input></input>
                    <p style={{color: 'red'}}>{this.state.password2}</p>
                    <br></br>
                    <button type="submit">Create Account</button>
                    <p style={{color: 'green'}}>{this.state.success}</p>
                    
                </form>
            </div>
        )
    }

}
