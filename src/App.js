import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Post from './components/Post';
import Nav from './components/Nav'
import route from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        { route }
      </div>
    );
  }
}

export default App;
