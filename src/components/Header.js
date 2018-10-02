import React, { Component } from 'react';
import logo from '../assets/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Around</h1>
      </header>
    )
  }
}