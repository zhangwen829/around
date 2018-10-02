import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';

export default class Main extends Component {

  getRoot = () => {
    return <Redirect to="login" />
  }

  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" render={this.getRoot} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route render={this.getRoot} />
        </Switch>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}
