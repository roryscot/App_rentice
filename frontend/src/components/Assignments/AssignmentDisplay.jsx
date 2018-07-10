import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { dateTimeOptions } from '../../utils/dateTime';


import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';


class AssignmentDisplay extends Component {
    static propTypes = {
        assignment: PropTypes.object,
        id: PropTypes.number,
    }

    state = {
        complete: this.props.assignment.complete,
        unSubmitted: true
    }

    switch = () => {
        this.setState({complete: !this.state.complete});
    }

    // setCompletenessValue() {
    //     // TODO: IMPLEMENT
    //     let headers = {"Content-Type": "application/json"};
    //     // let {token} = getState().auth;
    //     let {token} = this.props.auth;
    //     let body = JSON.stringify({
    //         complete: this.state.complete
    //     });
        
    //     if (token) {
    //         headers["Authorization"] = `Token ${token}`;
    //     }
    //     fetch("todo/:grouplist/:cardgroup/:cardID", {headers, body, method: "POST"})
    //     .then(res=>{
    //         if (res.status < 500) {
    //             return res.json().then(data => {
    //                 return this._fetchGroupList();
    //             });
    //         } else {
    //             console.log("Server Error!");
    //             throw res;
    //         }
    //     });
    // }

    render() {
        const { assignment, id } = this.props;
        const { assignment_title, description, due_date } = assignment;
        const className = this.state.complete ?
            "correct-answer" :
            "incorrect-answer";

        const formattedDate = new Date(due_date).toLocaleDateString("en-US", dateTimeOptions);

        return (
            <Card className="homework-card">
                <CardHeader>Due Date: <strong>{formattedDate}</strong></CardHeader>
                    <CardBody>
                    <CardTitle>{assignment_title}</CardTitle>
                    <CardText>{description}</CardText>
                    {/* TODO: Make edit button work */}
                    {/* TODO: Link assigments directly in cards */}
                 
                    </CardBody>
                <CardFooter className={className}
                >
                    <input 
                        type="checkbox"
                        id={assignment.assignment_title+id}
                        name={assignment.assignment_title}
                        onChange={this.switch}
                        checked={this.state.complete}
                    />
                    <label htmlFor={assignment.assignment_title+id}>Complete</label>
                    {
                        this.state.complete ?
                            (
                                this.state.unSubmitted ?
                                    <Button className="homework-card-button" onClick="">Submit</Button> :
                                    <Button className="homework-card-button">submitting...</Button>
                            ) :
                            <Button className="homework-card-button">Edit</Button>
                    }
                </CardFooter>
            </Card>
        );
    }
}

export default AssignmentDisplay;