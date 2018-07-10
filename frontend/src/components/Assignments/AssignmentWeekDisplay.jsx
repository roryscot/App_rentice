import React from 'react';
import PropTypes from 'prop-types';

import AssignmentDisplay from './AssignmentDisplay';

const AssignmentWeekDisplay = (props) => {
    const {title, assignments} = props;

    return (
        <div className="fields">
            <h5>{title}</h5>
            {
                assignments ? assignments.map((assignment)=>(
                    <div key={assignment.id} className="field third">
                        <AssignmentDisplay
                            id={assignment.id}
                            assignment={assignment}
                            dueDate={assignment.dueDate}
                        />
                    </div>
                )) :
                <div>No Assignments to Display</div>
            }
        </div>
    );
};


AssignmentWeekDisplay.propTypes = {
    "title": PropTypes.string.isRequired,
    "assignments": PropTypes.array.isRequired
};

export default AssignmentWeekDisplay;