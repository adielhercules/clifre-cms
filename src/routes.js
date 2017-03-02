import React from 'react';
import { Route, IndexRoute } from 'react-router';

import LandingPage from './containers/landing';
import Login from './components/account/signin';
import Signup from './components/account/signup';
import Container from './containers/dashboard/container';
import NotFoundErrorPage from './containers/dashboard/404';
import Dashboard from './containers/dashboard';
import CardSettings from './containers/dashboard/settings/card-settings';

import auth from './auth'

const Settings = () => {}; //To-do: this will be created later

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/account/signin',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

export default (
  <Route path="/">
    <IndexRoute component={LandingPage} />
    <Route path="account" component={LandingPage}>
      <IndexRoute component={Login} />
      <Route path="signin" component={Login} />
      <Route path="signup" component={Signup} />
    </Route>
    <Route path="dashboard" component={Container} onEnter={requireAuth}>
      <IndexRoute component={Dashboard} />
      <Route path="settings">
        <IndexRoute component={Settings} />
        <Route path="card" component={ CardSettings } />
      </Route>
      <Route path="*" component={NotFoundErrorPage} />
    </Route>
  </Route>
);
