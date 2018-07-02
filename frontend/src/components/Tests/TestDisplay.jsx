import React from 'react';
import TestSectionDisplay from './TestSectionDisplay';

import { questionListMaker } from '../../utils/helperFunctions';

const ToggleButton = (props) => (
    <button onClick={props.toggle}>Toggle</button>
);

const TestDisplay = (props) => {
    const {testNumber, completed, convertedScore, sections} = props.test;
    const userName = props.userName;
    return (
        <div className="test-display border border-white rounded">
                <ToggleButton toggle={props.toggle}/>

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
                            userName={userName}

                            toggle={this.toggle} shown={props.shown} hidden={props.hidden}
                            testSectionDisplayed={props.testSectionDisplayed}

                        />
                    );
                })
            }
            <hr/>
        </div>
    );
};

export default TestDisplay;