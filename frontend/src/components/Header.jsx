// import Demo from './Demo';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy';

import React, { Component } from 'react';
// import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { auth } from '../redux/actions';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import PropTypes from 'prop-types';

class Header extends Component {

  constructor(props) {
    super(props);

    this.menutoggle = this.menutoggle.bind(this);
    this.demotoggle = this.demotoggle.bind(this);
    this.contacttoggle = this.contacttoggle.bind(this);
    this.policytoggle = this.policytoggle.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      isOpen: false,
      demoModal: false,
      contactModal: false,
      policyModal: false
    };
  }

  menutoggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  demotoggle() {
    this.setState({
      demoModal: !this.state.demoModal
    });
  }

  contacttoggle() {
    this.setState({
      contactModal: !this.state.contactModal
    });
  }

  policytoggle() {
    this.setState({
      policyModal: !this.state.policyModal
    });
  }

  logout(e) {
    e.preventDefault();
    this.props.logOut();
    this.props.history.push("/login");
  }

  render() {

    const isActive = (pathname) => (window.location.pathname == pathname ? 'active' : '');

    const guestLinks = (
        this.props.isAuthenticated ?
          <Nav className="ml-auto nav-item">
            <NavItem className={isActive('#')}>
              <NavLink href={"/"} onClick={this.props.logout}>Logout</NavLink>
            </NavItem>
         </Nav>
        :
          <Nav className="ml-auto nav-item">
            <NavItem className={isActive('/signup')}>
              <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem className={isActive('/login')}>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
          </Nav>
    );

    const userLinks = (
      <Nav className="ml-auto nav-item">
      <NavItem className={isActive('/login')}>
        <NavLink href="#" onClick={this.logout}>Logout</NavLink>
      </NavItem>
      </Nav>
    );

    return (

      <div className="fixed-top">
        <Navbar className="navbar nav-top" light id="navbar-expand-custom">
          <NavbarBrand href="/"><img className="nav-img" src={require('../static/logo.svg')} alt="rf-icon"/></NavbarBrand>
          <NavbarToggler onClick={this.menutoggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="nav-item">
                <NavItem className={isActive('/solutions')}>
                  <NavLink href="/solutions">Solutions</NavLink>
                </NavItem>
                <NavItem className={isActive('/insight')}>
                  <NavLink href="/insight">Insights</NavLink>
                </NavItem>
                <NavItem className={isActive('/about')}>
                  <NavLink href="/about">About Us</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto nav-item">
                  { this.props.isLoggedIn ? userLinks : guestLinks }
                  <NavItem>
                  <NavLink href="javascript:void(0)" onClick={this.contacttoggle}>Contact</NavLink>
                </NavItem>
                <NavItem className="demo-btn">
                  <NavLink href="javascript:void(0)" onClick={this.demotoggle}>Request Demo</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
        <Demo modal={this.state.demoModal} toggle={this.demotoggle}/>
        <Contact modal={this.state.contactModal} toggle={this.contacttoggle} policytoggle={this.policytoggle}/>
        <PrivacyPolicy modal={this.state.policyModal} toggle={this.policytoggle}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.users.isLoggedIn,
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(auth.logout()),
  };
};

Header.propTypes = {
  username: PropTypes.string,
  logOut: PropTypes.function,
  history: PropTypes.object,
  isAuthenticated: PropTypes.boolean
};

export default connect(mapStateToProps, mapDispatchToProps)((Header));
