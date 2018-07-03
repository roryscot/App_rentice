import React, {Component} from 'react';
import TestSectionRow from './TestSectionRow';

const TestSectionTable = (props) => {
    const {owner,allTestSectionsDisplayed, questions, studentAnswers, correctAnswers, themes, marks, tutornotes} = props;
    return (
        allTestSectionsDisplayed ?
            (
                    <table >
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>{owner}{"'s Answer"}</th>
                                <th>Correct Answer</th>
                                <th>Theme</th>
                                <th>{owner}{"'s Mark"}</th>
                                <th>Tutor Note</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            questions.map(q => {
                                const verisimilitude = studentAnswers[q] === correctAnswers[q] ? 
                                    "correct-answer" : "incorrect-answer";
                                
                                return (
                                    <TestSectionRow
                                        key={`question${q}`}
                                        verisimilitude={verisimilitude}
                                        questionNumber={q}
                                        studentAnswer={studentAnswers[q]}
                                        correctAnswer={correctAnswers[q]}
                                        theme={themes[q]}
                                        mark={marks[q]}
                                        tutornote={tutornotes[q]}
                                    />
                                );
                                
                            }) 
                        }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Number</th>
                                <th>{owner}{"'s Answer"}</th>
                                <th>Correct Answer</th>
                                <th>Theme</th>
                                <th>{owner}{"'s Mark"}</th>
                                <th>Tutor Note</th>
                            </tr>
                        </tfoot>
                    </table>
                ) : 
                    null
    );
};

const TestSectionDisplay = (props) => {
    //if this.props.auth.user.type === student {
        const owner = props.username;
    // } else { owner = student }

    return (
        <div className="section-display border border-white rounded">

             <table>
                <thead>
                    <tr>
                        <th>{props.section}</th>
                        <th className="section-header-display">Score: {props.convertedScore} -</th>
                        <th >({props.score} / {props.numQuestions})</th>
                    </tr>
                </thead>
            </table>
            <hr />
            < TestSectionTable {...props} owner={owner}/>
            <table>
            <tfoot>
                    <tr>
                        <th>{props.section}</th>
                        <th className="section-header-display">Score: {props.convertedScore} -</th>
                        <th >({props.score} / {props.numQuestions})</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );

}

export default TestSectionDisplay;