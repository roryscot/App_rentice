import React from 'react';

export const DisplaySections = (props) => (
    <span className="close" onClick={props.toggle}>
    {
        props.allTestSectionsDisplayed ? 
        "X" : 
        "O"
    }
    </span>
);


export const DisplayTest = (props) => (
    <span className="close" onClick={props.toggle}>
        {
            props.collapse ? 
            "X" : 
            "O"
        }
    </span>
)
