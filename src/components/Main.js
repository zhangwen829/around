import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import Home from './Home'

export default class Main extends Component {
  getLogin = () => {
    if (this.props.isLoggedIn) {
      return <Redirect to="/home" />
    }
    return <Login handleLogin={this.props.handleLogin} />
  }

  getHome = () => {
    if (this.props.isLoggedIn) {
      return <Home />
    }
    return <Redirect to="login" />
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
          <Route path="/home" render={this.getHome} />
          <Route render={this.getRoot} />
        </Switch>
      </div>
    );
  }
}
