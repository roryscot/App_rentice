import React, {Component} from "react";
import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "../../redux/actions";

import AuthInput from '../common/AuthInput';

class Login extends Component {
  state = {
    username: "",
    email:"",
    password: "",
    confirmPassword: "",
  }

  onSubmit = e => {
    e.preventDefault();
    console.warn("Validate data not implemented")
    this.props.register(this.state.username, this.state.email, this.state.password);
  }

  onChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <form onSubmit={this.onSubmit}>
          <h2 className="major">Register</h2>
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
          <div className="fields">
            <div className="field third">
              <input type="radio" id="student" name="student"/>
              <label htmlFor="student">Student</label>
            </div>
            <div className="field third">
              <input type="radio" id="tutor" name="tutor"/>
              <label for="tutor">Tutor</label>
            </div>
            <div className="field third">
              <input type="radio" id="entrepreneur" name="entrepreneur"/>
              <label htmlFor="entrepreneur">Entrepreneur</label>
            </div>
            <AuthInput title="Email" name="email" type="email" onChange={this.onChange} className="field half"/>
            <AuthInput title="Username" name="username" type="text" onChange={this.onChange} className="field half"/>
            <AuthInput title="Password" name="password" type="password" onChange={this.onChange} className="field half"/>
            <AuthInput title="Confirm Password" name="confirmPassword" type="password" onChange={this.onChange} className="field half"/>
          </div>
          <p>
            <button type="submit">Register</button>
          </p>
        <p>
          Already have an account? <Link to="/login" className="open"><em>Login</em></Link>
        </p>
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
    register: (username, email, password) => dispatch(auth.register(username, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);