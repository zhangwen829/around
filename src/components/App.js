import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js'
import '../styles/App.css';

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}
