import React, { Component } from 'react';
import { Register } from './Register';
import { Login } from './Login';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Login />
        {/* <Register/> */}
      </div>
    );
  }
}
