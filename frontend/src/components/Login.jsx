import React, {Component} from "react";
import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "../redux/actions";

class Login extends Component {

state = {
    username:'',
    password:'',
};

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleValidateData() {
    alert('Validate data not implemented!');
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.handleValidateData();
    if(this.state.username==='' || this.state.password==='') {
      console.info("Fields cannot be empty");
      return;
    }
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    const history = this.props.history;
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="auth-form">
          <form className="form-size" onSubmit={this.onSubmit}>
          <fieldset>
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
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input className="form-control"
                        label="Username"
                        value={this.state.username}
                        onChange={this.onChange}
                        type="username"
                        placeholder="Username"
                        name="username"
                />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control"
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                        name="password"
                />
            </div>
          </fieldset>
          <div className="form-group">
              <button type="submit" className="btn btn-success btn-block">Login</button>
            </div>
        </form>
        <p className="form-group">
            {" Don't have an account?"}
          </p>
        <button onClick={()=>{history.push("/register");}} className="btn demo-btn">Register</button>

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
  return {
    login: (username, password) => {
      return dispatch(auth.login(username, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);