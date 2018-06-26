import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy';

import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Footer extends Component {

  constructor(props) {
    super(props);

    this.contacttoggle = this.contacttoggle.bind(this);
    this.policytoggle = this.policytoggle.bind(this);

    this.state = {
      contactModal: false,
      policyModal: false
    };
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

  render() {
    return (
      <div className="footer">
        <Nav className="nav justify-content-center footer-nav">
          <NavItem>
            <NavLink href="/solutions">Solutions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/insight">Insights</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="javascript:void(0)" onClick={this.contacttoggle}>Contact</NavLink>
          </NavItem>
        </Nav>
        <div className="text-center nav-top footer-text"> © 2018 App_rentice. All rights reserved. <a className="text-underline" href="javascript:void(0)" onClick={this.policytoggle}>Privacy Policy</a></div>
        <Contact modal={this.state.contactModal} toggle={this.contacttoggle} policytoggle={this.policytoggle}/>
        <PrivacyPolicy modal={this.state.policyModal} toggle={this.policytoggle}/>
      </div>
    );
  }
}
