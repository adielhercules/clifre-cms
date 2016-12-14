import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LandingPage from './containers/landing';
import Container from './containers/dashboard/container';
import Dashboard from './containers/dashboard';

export default (
  <Route path="/">
    <IndexRoute component={ LandingPage } />
    <Route path="dashboard" component={ Container }>
      <IndexRoute component={ Dashboard } />
    </Route>
  </Route>
);
