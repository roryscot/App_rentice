import React, {Component} from "react";
import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "../redux/actions";

class Register extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    username: "",
    firstName: "",
    lastName: "",
    email:"",
    password: "",
    confirmPassword: "",
    company: ""
  }

  onChange(e) {
    let info = { [e.target.name]: e.target.value };
    console.log(info);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleValidateData() {
    alert('Validate data not implemented!');
  }

  onSubmit = e => {
    e.preventDefault();
    this.handleValidateData();
    this.props.register(this.state.username, this.state.password);
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="auth-form">
                  <form className="form-size" onSubmit={this.onSubmit}>
                  <fieldset>
                    <legend>Register</legend>
                    {
                        this.props.errors.length > 0 && (
                          <ul>
                          {this.props.errors.map(error => (
                              error.message === 'Authentication credentials were not provided.' ? null :
                              <li key={error.field}>{error.field + ': ' + error.message}</li>
                          ))}
                          </ul>
                      )
                    }
                    <p className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        className="form-control"
                        type="text" id="username"
                        onChange={this.onChange}
                        placeholder="Username"
                        name="username"
                        required />
                    </p>
                    <p className="form-group">
                      <label htmlFor="First Name">First Name</label>
                      <input
                        className="form-control"
                        type="text" id="first name"
                        onChange={this.onChange}
                        placeholder="First Name"
                        name="firstName"
                        required />
                    </p>
                    <p className="form-group">
                      <label htmlFor="last name">Last Name</label>
                      <input
                        className="form-control"
                        type="text" id="last name"
                        onChange={this.onChange}
                        placeholder="Last Name"
                        name="lastName"
                        required />
                    </p>
                    <p className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control"
                        type="email" id="email"
                        onChange={this.onChange}
                        placeholder="Email"
                        name="email"
                        required/>
                    </p>
                    <p className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        className="form-control"
                        type="password" id="password"
                        onChange={this.onChange}
                        placeholder="Password"
                        name="password"
                        required/>
                    </p>
                    <p className="form-group">
                      <label htmlFor="password">Confirm Password</label>
                      <input
                        className="form-control"
                        type="password" id="confirmPassword"
                        onChange={this.onChange}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        required/>
                    </p>
                    <p className="form-group">
                      <label htmlFor="Company">Password</label>
                      <input
                        className="form-control"
                        type="company" id="company"
                        onChange={this.onChange}
                        placeholder="Company"
                        name="company"
                        />
                    </p>
                    <p>
                      <button type="submit" className="btn btn-lg btn-success btn-block">Register</button>
                    </p>

                    <p>
                      Already have an account? <Link to="/login">Login</Link>
                    </p>
                  </fieldset>
                </form>
              </div>
          </div>
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
  console.log(this.state);
  return {
    register: (username, password) => dispatch(auth.register(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);