import React, {Component} from 'react';
import { connect } from 'react-redux';
import { auth } from '../../redux/actions';


import {mockStudent, mockTutor, mockInstitution} from '../../assets/devMock/devMock';

class TestContainer extends Component {

}

export default connect(TestContainer)