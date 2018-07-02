import React from 'react';


import {mockStudent, mockTutor, mockInstitution} from '../assets/devMock/devMock';

import {mockStudentTest} from '../assets/devMock/ACT_67F';

import {Notes, TestsContainer} from './';

class AboutPage extends React.Component {
    render() {

        const userName = mockStudent.name.firstName + " " + mockStudent.name.lastName;
        return (
            <div id="about">
                <div className="content">
                    <div className="inner">
                        <h2 className="major">About</h2>
                        <p>This is a web application to organize and coordinate students with tutors</p>
                    </div>

                </div>

                <div>
                    <h4>Get immedtiate results</h4>

                    <TestsContainer
                        test={mockStudentTest}
                        userName={userName}
                    />
                </div>
            </div>
        );
    }
}

export default AboutPage;