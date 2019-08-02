import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import Navbar from './User/Navbar.js';
import Register from './User/Register.js';
import UserList from './User/UserList.js';
import Login from './User/Login.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      data: []
    }
  }
  makeRequest = () => {
    axios
    .get("http://localhost:5000/user/all")
    .then(response => {
      this.setState({
        data: response.data
      })
    })
  }

  componentDidMount = () => {
    this.makeRequest();
  }

  render(){
    return (
      <div>
        <Router>
          <Navbar />
          <Route exact path="/" render={() => <Register getAll={this.makeRequest}/>}/>
          <Route path="/userlist" render={() => <UserList data={this.state.data}/>}/>
          <Route path="/login" render={() => <Login />}/>

        </Router>

        
        


      </div>
    );
  }
}

export default App;
