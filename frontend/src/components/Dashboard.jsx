import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";

import {Notes, TestContainer} from './';

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
                <TestContainer />
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