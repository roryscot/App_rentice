import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TestSectionDisplay from './CollapsingTestSectionDisplay';
import ReactCollapsingTable from 'react-collapsing-table';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import { questionListMaker } from '../../utils/helperFunctions';

import {DisplayTest} from './DisplaySectionsToggle';

class TestDisplay extends Component {
    static propTypes = {
        allTestSectionsDisplayed: PropTypes.bool.isRequired,
        test: PropTypes.shape({
            testNumber: PropTypes.string.isRequired,
            completed: PropTypes.string.isRequired,
            convertedScore: PropTypes.number.isRequired,
            sections: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string.isRequired,
                score: PropTypes.number.isRequired,
                convertedScore: PropTypes.number.isRequired,
                numQuestions: PropTypes.number.isRequired,
                studentAnswers: PropTypes.shape({}).isRequired,
                correctAnswers: PropTypes.shape({}).isRequired,
                themes: PropTypes.shape({}).isRequired,
                marks: PropTypes.shape({}).isRequired,
                tutornotes: PropTypes.shape({}).isRequired,
            })).isRequired,
        }).isRequired,
        
        username: PropTypes.string.isRequired,
    }
    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }
    
    state = {
        collapse: false
    };

    render() {
        const { allTestSectionsDisplayed, test, username } = this.props;
        const { testNumber, completed, convertedScore, sections} = test;

        return (
            <div>
                <DisplayTest toggle={this.toggle} collapse={this.state.collapse}/>

                <div className="test-display border border-white rounded">
                    <Collapse isOpen={this.state.collapse}>

                        <Card className="collapse-card">
                        <table>
                            <thead >
                                <tr>
                                    <th className="test-header-display">{testNumber}</th>
                                    <th className="test-header-display">Score: {convertedScore}</th>
                                    <th className="test-header-display">({completed})</th>
                                </tr>

                            </thead>               
                        </table>
                        {
                            sections.map(section => {
                                const {title, score, convertedScore, studentAnswers, correctAnswers, marks, themes, tutornotes} = section;
                                const questions = questionListMaker(section.numQuestions);
                                return (
                                    <TestSectionDisplay
                                        key={`${testNumber}: ${title}`}
                                        section={title}
                                        numQuestions={questions.length}
                                        score={score}
                                        convertedScore={convertedScore}
                                        questions={questions}
                                        studentAnswers={studentAnswers}
                                        correctAnswers={correctAnswers}
                                        themes={themes}
                                        marks={marks}
                                        tutornotes={tutornotes}
                                        username={username}
            
                                        allTestSectionsDisplayed={allTestSectionsDisplayed}
                                        
            
                                    />
                                );
                            })
                        }
                        </Card>
                    </Collapse>
                <table>
                        <tfoot >
                            <tr>
                                <th className="test-header-display">{testNumber}</th>
                                <th className="test-header-display">Score: {convertedScore}</th>
                                <th className="test-header-display">({completed})</th>
        
                            </tr>
        
                        </tfoot>
                    
                    </table>
                </div>

            </div>
           
        );
    }

}

export default TestDisplay;
