import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsername, getProfile, getUserid } from '../ducks/reducer';
import axios from 'axios';
import { Route } from 'react-router-dom';

class Auth extends Component {
  constructor() {
    super()

    this.state = {
      username: "",
      password: ""
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleUsernameChange(event) {
    this.setState({
      username: event
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event
    })
  }

  login = () => {

  }

  register = () => {
    const { username, password } = this.state
    const example = {
      username,
      password
    }
    axios.post('http://localhost:4007/api/auth/register', example).then(response => {
      this.setState({
        username: response.data.username,
        password: response.data.password
      })
      this.props.history.push('/dashboard')
    })
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="username" onChange={(event) => this.handleUsernameChange(event.target.value)}></input>
        <input type="text" placeholder="password" onChange={(event) => this.handlePasswordChange(event.target.value)}></input>
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default connect(null, { getUsername, getProfile, getUserid })(Auth);