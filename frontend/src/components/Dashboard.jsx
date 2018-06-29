import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";

import {Notes} from './';

class Dashboard extends Component {
    static propTypes = {
        user: PropTypes.shape({
            username: PropTypes.string
        })
    }

    render () {
        return (
            <div>
                <p className="App-intro">
                    Welcome {this.props.user ? this.props.user.username : null}
                </p>
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