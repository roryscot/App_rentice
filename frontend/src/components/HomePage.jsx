import React from 'react';

import logo from '../../src/logo.svg';

import Notes from './Notes'

const HomePage = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to App_rentice</h1>
        </header>
        <p className="App-intro">
            sign in          
        </p>
        <Notes />
    </div>
);

export default HomePage;