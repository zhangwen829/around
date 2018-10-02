import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';

export default class Main extends Component {
  getLogin = () => {
    return <Login handleLogin={this.props.handleLogin} />
  }

  getRoot = () => {
    return <Redirect to="login" />
  }

  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" render={this.getRoot} />
          <Route path="/login" render={this.getLogin} />
          <Route path="/register" component={Register} />
          <Route render={this.getRoot} />
        </Switch>
      </div>
    );
  }
}
