import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App_rentice from "./redux/reducers";

import {HomePage, NotFound} from './components';
import './App.css';

let store = createStore(App_rentice,  applyMiddleware(thunk));

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
