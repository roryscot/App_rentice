import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';

import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App_rentice from "./redux/reducers";

import {auth} from "./redux/actions";

import {Contact, Footer, Header, Register, HomePage, Notes, NotFound, Login} from './components';
import './App.css';

let store = createStore(App_rentice,  applyMiddleware(thunk));

class RootContainerComponent extends Component {

  componentDidMount() {
      this.props.loadUser();
  }

  PrivateRoute = ({component: ChildComponent, ...rest}) => {
      return <Route {...rest} render={props => {
          if (this.props.auth.isLoading) {
              return <em>Loading user...</em>;
          } else if (!this.props.auth.isAuthenticated) {
              return <Redirect to="/login" />;
          } else {
              return <ChildComponent {...props} />;
          }
      }} />;
  }

  render() {
      let {PrivateRoute} = this;
      return (
        <div>
          {/* <Header /> */}
          <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <PrivateRoute exact path="/notes" component={Notes} />
                <Route component={NotFound} />
            </Switch>
          </Router>
         <Footer />
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => {
        return dispatch(auth.loadUser());
        }
    };
};

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
