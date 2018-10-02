import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js'
import '../styles/App.css';

export default class App extends Component {
  state = {
    isLoggedIn: false
  }
  handleLogin = () => {
    this.setState({ isLoggedIn: true })
  }
  handleLogout = () => {
    this.setState({ isLoggedIn: false })
  }
  render() {
    console.log(this.state.isLoggedIn);
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout} />
        <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin} />
      </div>
    );
  }
}
