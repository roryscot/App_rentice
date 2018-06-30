import React, {Component} from 'react';
import { connect } from 'react-redux';
import { auth } from '../../redux/actions';

import { buildMap } from '../../utils/helperFunctions';


import {mockStudent, mockTutor, mockInstitution} from '../../assets/devMock/devMock';

const SectionRow = (props) => {
    return (
        <tr className={props.verisimilitude}>
            <td>{props.questionNumber}</td>
            <td>{props.studentAnswer}</td>
            <td>{props.correctAnswer}</td>
            <td>{props.theme}</td>
            <td>{props.mark}</td>
            <td>{props.tutornote}</td>
        </tr>
    );
}

const SectionDisplay = (props) => {
    //if this.props.auth.user.type === student {
        const owner = props.userName;
    // }
    return (
        <div>
            <h4>{props.section}</h4>
            <p>Score: <span>{props.convertedScore}</span> - ({props.score} / {props.numQuestions})</p>
            <table>
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
                    props.questions.map(q => {
                        const verisimilitude = props.studentAnswers[q] === props.correctAnswers[q] ? 
                            "correct-answer" : "incorrect-answer";
                        
                        return (
                            <SectionRow
                                key={`question${q}`}
                                verisimilitude={verisimilitude}
                                questionNumber={q}
                                studentAnswer={props.studentAnswers[q]}
                                correctAnswer={props.correctAnswers[q]}
                                theme={props.themes[q]}
                                mark={marks[q]}
                                tutornote={props.tutornotes[q]}
                            />
                        );
                        
                    })
                }
                </tbody>
            </table>
        </div>
    );

}

const TestDisplay = (props) => {
    const {testNumber, completed, convertedScore, sections} = props.test;
    const userName = props.userName;
    return (
        <div>
            <h3>{testNumber}</h3>
            <p>Score: {convertedScore}</p><h6>({completed})</h6>
            {
                sections.map(section => {
                    const {title, score, convertedScore, questions, studentAnswers, correctAnswers, themes, tutornotes} = section;
                    return (
                        <SectionDisplay
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
                            
                        />
                    );
                })
            }
        </div>
    );
}

const mockQuestions = [1,2,3,4,5];
const mockStudentAnswers = {
    1: "A",
    2: "F",
    3: "C",
    4: "H",
    5: "_",
}
const mockCorrectAnswers = {
    1: "A",
    2: "F",
    3: "B",
    4: "H",
    5: "A",
}

const mockThemes = {
    1: "Comma Usage",
    2: "Parallel Structure",
    3: "Paragraph Correction",
    4: "Misplaced Modifiers",
    5: "Comma Usage",
}

const marks = {
    1: "?",
    2: "*",
    3: "!",
    4: null,
    5: "?",
}

const mockTutorNotes = {
    1: null,
    2: null,
    3: "This was a simple misreading of the question",
    4: "this is a really long note to test what happens to the UI if the tutor feels like they need to do discuss something more extensive in the space that they have been provided for a note.",
    5: "Thematically, Maxim struggles with this topic.",
}
const mockTest = {
    testNumber: "71C",
    convertedScore: 28,
    completed: "Incomplete",
    sections: [
        {
            title: "Grammar",
            score: 3,
            convertedScore: 27,
            questions: mockQuestions,
            studentAnswers: mockStudentAnswers,
            correctAnswers: mockCorrectAnswers,
            themes: mockThemes,
            marks: marks,
            tutornotes: mockTutorNotes,
        },
        {   
            title: "Reading",
            questions: mockQuestions,
            score: 3,
            convertedScore: 28,
            studentAnswers: {
                1: "A",
                2: "F",
                3: "C",
                4: "H",
                5: "_",
            },
            correctAnswers: {
                1: "D",
                2: "F",
                3: "C",
                4: "H",
                5: "A",
            },
            themes: mockThemes,
            marks: marks,
            tutornotes: mockTutorNotes,
        }
    ]
};

class TestContainer extends Component {
    // TODO: create a toggle that will expand tests, sections and notes


    render() {
        return (
            <div>
                <h2>Test Results</h2>
                <TestDisplay test={mockTest} userName={this.props.user.username}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        user: state.auth.user
    });
  };


export default connect(mapStateToProps)(TestContainer);