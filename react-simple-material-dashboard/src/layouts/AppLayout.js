import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import appRoutes from '../routes/app';
import Sidebar from '../components/Sidebar';

class AppLayout extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              <Link to="/posts">Post</Link>
            </li>
          </ul>
        </div>
        <Sidebar routes={appRoutes} />
        <div>
          <Switch>
            {appRoutes.map((route, index) => 
              <Route path={route.path} component={route.component} key={index} />
            )}
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppLayout;