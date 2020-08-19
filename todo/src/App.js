import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LoginComponent from './Components/LoginComponent';
import LogoutComponent from './Components/LogoutComponent';
import WelcomeComponent from './Components/WelcomeComponent';
import ListTodoComponent from './Components/ListTodoComponent';
import EditTodoComponent from './Components/EditTodoComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import AuthRoute from './Components/AuthRoute';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/login" component={LoginComponent} />
            <AuthRoute path="/logout" component={LogoutComponent} />
            <AuthRoute path="/welcome" component={WelcomeComponent} />
            <AuthRoute path="/todos/:id" component={EditTodoComponent} />
            <AuthRoute path="/todos" component={ListTodoComponent} />
            <Route path="/" exact component={LoginComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default App;
