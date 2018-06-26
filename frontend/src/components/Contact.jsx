import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

export default class Contact extends Component {

  render() {
    let MOCKUSER = "user@userdomain.com";
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle} keyboard={false} backdrop="static">
        <ModalHeader toggle={this.props.toggle}>Contact Redflag</ModalHeader>
        <ModalBody>
          Email: <a href={`mailto:${MOCKUSER}`}>{MOCKUSER}</a>
        </ModalBody>
        <ModalFooter>
            <a className="text-underline" href="javascript:void(0)" onClick={this.props.policytoggle}>Privacy Policy</a>
        </ModalFooter>
      </Modal>
    );
  }
}

Contact.propTypes = {
  modal: PropTypes.boolean,
  toggle: PropTypes.function,
  policytoggle: PropTypes.function
};
