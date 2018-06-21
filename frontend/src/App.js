import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";

import {HomePage, NotFound} from './components';
import { createStore } from "redux";
import App_rentice from "./reducers";

import './App.css';

let store = createStore(App_rentice);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
