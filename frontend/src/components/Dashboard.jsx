import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";

import {Notes, TestsContainer} from './';

// TODO: get tests from database
import { mockStudentTest1, mockStudentTest2, mockStudentTest3 } from '../assets/devMock/ACT_67F';
const  tests = [mockStudentTest1,mockStudentTest2,mockStudentTest3];

class Dashboard extends Component {
    static propTypes = {
        user: PropTypes.shape({
            username: PropTypes.string
        })
    }

    render () {
        return (
            <div>
                <h2 className="App-intro">
                    Welcome {this.props.user ? this.props.user.username : null}
                </h2>
                <div>
                    <p>
                        This is your dashboard. From here you have access to all of your tools and resources.
                    </p>

                </div>
                <TestsContainer
                    tests={tests}
                    username={this.props.user.username}
                />
                <Notes />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return ({
        user: state.auth.user
    });
  };

  const mapDispatchToProps = dispatch => {
    return {};
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);