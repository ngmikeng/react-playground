import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Post from '../components/Post';


class App extends Component {
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
        <div>
          <Switch>
            <Route path='/posts' component={Post} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;