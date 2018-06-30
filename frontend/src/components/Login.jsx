import React, {Component} from "react";
import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";
import {auth} from "../redux/actions";

import AuthInput from './common/AuthInput';

class Login extends Component {

  state = {
    username: "",
    password: "",
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  onChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <h2>Login</h2>
            {
              this.props.errors.length > 0 && (
                <ul>
                  {
                    this.props.errors.map(error => (
                      error.message === 'Authentication credentials were not provided.' ? null :
                      <li key={error.field}>{error.field + ': ' + error.message}</li>
                    ))
                  }
                </ul>
              )
            }
            <AuthInput title="Username" name="username" type="text" onChange={this.onChange} />
            <AuthInput title="Password" name="password" type="password" onChange={this.onChange} />
            <p>
              <button type="submit">Login</button>
            </p>

            <p>
              {"Don't have an account?"} <Link to="/register">Register</Link>
            </p>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let errors = [];
  if (state.auth.errors) {
    errors = Object.keys(state.auth.errors).map(field => {
      return {field, message: state.auth.errors[field]};
    });
  }
  return {
    errors,
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      return dispatch(auth.login(username, password));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);