
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {} from 'react-router-dom';

// import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { auth } from '../redux/actions';


import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
      user: PropTypes.object
    }),
    username: PropTypes.string,
    logOut: PropTypes.func.isRequired,
    history: PropTypes.object,
  }

  state = {
    isOpen: false,
    demoModal: false,
    contactModal: false,
    policyModal: false
  }

  menutoggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  contacttoggle = () => {
    this.setState({
      contactModal: !this.state.contactModal
    });
  }

  policytoggle = () => {
    this.setState({
      policyModal: !this.state.policyModal
    });
  }

  logout = (e) => {
    console.log(this.props)
    e.preventDefault();
    this.props.logOut();
  }

  render() {
    const isActive = (pathname) => (window.location.pathname === pathname ? 'active' : '');

    const guestLinks = (
          <Nav className="ml-auto" navbar>
            <NavItem className={isActive('/signup')}>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavItem className={isActive('/login')}>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
          </Nav>
    );

    const authenticatedLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem className={isActive("/profile")}>
          <NavLink href={'/profile'} >Profile</NavLink>
        </NavItem>
        <NavItem className={isActive("/dashboard")}>
          <NavLink href={'/dashboard'} >Dashboard</NavLink>
        </NavItem>
        <NavItem className={isActive('/login')}>
          <NavLink href="#" onClick={this.logout}>Logout</NavLink>
        </NavItem>
      </Nav>
    );

    const generalLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem className={isActive("/about")}>
          <NavLink href={'/about'} >About</NavLink>
        </NavItem>
        <NavItem className={isActive("/contact")}>
          <NavLink href={'/contact'} >Contact</NavLink>
        </NavItem>
      </Nav>
    );

    return (
      <div className="header-container">
        <header className="clearfix">
            <Navbar className="links">
              <Nav>
                  <NavItem className={isActive("/")}>
                        <NavLink href={'/'} >App~rentice</NavLink>
                  </NavItem>
              </Nav>
              {generalLinks}
              {
                this.props.isAuthenticated ?
                  authenticatedLinks :
                  guestLinks
              }
            </Navbar>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(auth.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)((Header));
