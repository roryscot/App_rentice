import React from 'react';

import logo from '../../src/logo.svg';

const NotFound = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">404 Not Found</h1>
        </header>
        <p>The page you are looking for does not exist.</p>
    </div>
);

export default NotFound;