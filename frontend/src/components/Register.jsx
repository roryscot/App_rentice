import React, {Component} from "react";
import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "../redux/actions";

import AuthInput from './common/AuthInput';

class Login extends Component {
  state = {
    username: "",
    firstName: "",
    lastName: "",
    email:"",
    password: "",
    confirmPassword: "",
  }

  onSubmit = e => {
    e.preventDefault();
    console.alert("Validate data not implemented")
    this.props.register(this.state.username, this.state.password);
  }

  onChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset id="wrapper">
          <h2>Register</h2>
            <AuthInput title="Email" name="email" type="email" onChange={this.onChange} />
            <AuthInput title="Username" name="username" type="text" onChange={this.onChange} />
            <AuthInput title="First Name" name={"firstName"} type="text" onChange={this.onChange} />
            <AuthInput title="Last Name" name={"lastName"} type="text" onChange={this.onChange} />
            <AuthInput title="Password" name="password" type="password" onChange={this.onChange} />
            <AuthInput title="Confirm Password" name="confirmPassword" type="password" onChange={this.onChange} />
            <AuthInput title="Company" name="company" type="email" onChange={this.onChange} />
            <p>
              <button type="submit">Register</button>
            </p>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </fieldset>
      </form>
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
    register: (username, password) => dispatch(auth.register(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);