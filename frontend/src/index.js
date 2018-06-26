import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './App.1.js';

import registerServiceWorker from './registerServiceWorker';
import './static/css/main.css';

import './static/css/initializr/css/main.css';

const ReactRoot = document.getElementById('reactRoot');

if (ReactRoot) {
    ReactDOM.render(<App />, ReactRoot);
    registerServiceWorker();
}
