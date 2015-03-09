"use strict";

import React from "react";
import AuthActions from "../actions/auth_actions";
import {Navigation} from "react-router";
import LoadingActions from "../actions/loading_actions";

const Login = React.createClass({
  mixins: [Navigation],

  componentDidMount() {
      LoadingActions.loadingComplete();
  },

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form role="form" action="login" method="post" className="form-horizontal">
          <div className="form-group">
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-5">
              <input onKeyPress={this.handleKeyPress} type="text" className="form-control" name="email" ref="email" placeholder="email" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-5">
              <input onKeyPress={this.handleKeyPress} type="password" className="form-control" name="password" ref="password" placeholder="password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <button onClick={this.handleSubmit} type="submit" className="btn btn-primary btn-block">
                <i className="glyphicon glyphicon-log-in"></i> Sign In
              </button>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <button onClick={this.handleSignup} type="submit" className="btn btn-primary btn-block">
                <i className="glyphicon glyphicon-log-in"></i> Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  },

  handleKeyPress(evt) {
    if (evt.key === "Enter") {
      evt.preventDefault();
      this.doLogin();
    }
  },

  handleSubmit(evt) {
    evt.preventDefault();

    this.doLogin();
  },

  doLogin() {
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;

    AuthActions.login(email, password);
  },

  handleSignup(evt) {
    evt.preventDefault();

    this.transitionTo("/signup");
  }
});

export default Login