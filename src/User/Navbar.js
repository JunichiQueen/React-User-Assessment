import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Navbar extends Component{
    render(){
        const mystyle = {
            listStyleType: "none",
            margin: 0,
            padding: 0,
            width: "200px",
            backgroundColor: "#f1f1f1"
        }
        return(
            <div>
                <ul style={mystyle}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/userlist">User List</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        )
    }
}

