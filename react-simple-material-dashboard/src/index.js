import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './layouts/App';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from "react-router-dom";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path='/' component={AppLayout}/>;
    </Switch>
  </Router>
  ,document.getElementById('root')
);