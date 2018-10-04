import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js'
import '../styles/App.css';
import { TOKEN_KEY } from '../constants.js'

export default class App extends Component {
  state = {
    isLoggedIn: !!localStorage.getItem(TOKEN_KEY)
  }
  handleLogin = (response) => {
    localStorage.setItem(TOKEN_KEY, response)
    this.setState({ isLoggedIn: true })
  }
  handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY)
    this.setState({ isLoggedIn: false })
  }
  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout} />
        <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin} />
      </div>
    );
  }
}
