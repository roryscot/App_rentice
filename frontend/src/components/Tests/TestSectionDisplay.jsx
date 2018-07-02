import React, {Component} from 'react';
import TestSectionRow from './TestSectionRow';


const ToggleButton = (props) => (
    <button onClick={props.toggle}>Toggle</button>
);

const TestSectionDisplay = (props) => {
    //if this.props.auth.user.type === student {
        const owner = props.userName;
    // }

    console.log(props.testSectionDisplayed)
    return (
        <div className="section-display border border-white rounded">
                <ToggleButton toggle={props.toggle}/>

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
                    props.testSectionDisplayed ? 
                    props.questions.map(q => {
                        const verisimilitude = props.studentAnswers[q] === props.correctAnswers[q] ? 
                            "correct-answer" : "incorrect-answer";
                        
                        return (
                            <TestSectionRow
                                key={`question${q}`}
                                verisimilitude={verisimilitude}
                                questionNumber={q}
                                studentAnswer={props.studentAnswers[q]}
                                correctAnswer={props.correctAnswers[q]}
                                theme={props.themes[q]}
                                mark={props.marks[q]}
                                tutornote={props.tutornotes[q]}
                            />
                        );
                        
                    }) :
                    null
                }
                </tbody>
            </table>
            <hr />
        </div>
    );

}

export default TestSectionDisplay;