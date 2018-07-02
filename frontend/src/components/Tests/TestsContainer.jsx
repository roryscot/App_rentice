import React, {Component} from 'react';
import { connect } from 'react-redux';
import TestDisplay from './TestDisplay';



const ToggleButton = (props) => (
    <button onClick={props.toggle}>Toggle</button>
);

class TestsContainer extends Component {
    // TODO: create a toggle that will expand tests, sections and notes
    state = {
        testContainerShown: true,
        testSectionDisplayed: true
    }

    toggle = () => {
        console.log(this.state)
		this.setState({
			testSectionDisplayed: !this.state.testSectionDisplayed
		});
	}

    render() {
        let shown = {
			display: this.state.testSectionDisplayed ? "block" : "none"
        };
        let hidden = {
			display: this.state.testSectionDisplayed ? "none" : "block"
        };
        return (
            <div>
                <h2>Test Results</h2>
                <ToggleButton toggle={this.toggle} />
                <TestDisplay {...this.props} 
                toggle={this.toggle} shown={shown} hidden={hidden}
                testSectionDisplayed={this.state.testSectionDisplayed}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        user: state.auth.user
    });
  };


export default connect(mapStateToProps)(TestsContainer);