import React from 'react';

const TestSectionRow = (props) => {
    const { verisimilitude, questionNumber, studentAnswer, correctAnswer, theme, mark, tutornote} = props;
    return (
        <tr className={verisimilitude}>
            <td>{questionNumber}</td>
            <td>{studentAnswer}</td>
            <td>{correctAnswer}</td>
            <td>{theme}</td>
            <td>{mark}</td>
            <td>{tutornote}</td>
        </tr>
    );
};

export default TestSectionRow;