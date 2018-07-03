import React from 'react';

const DisplaySections = (props) => (
    <span className="close" onClick={props.toggle}>
    {
        props.allTestSectionsDisplayed ? 
        "X" : 
        "O"
    }
    </span>
);

export default DisplaySections;