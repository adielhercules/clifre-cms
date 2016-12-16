import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LandingPage from './containers/landing';
import Container from './containers/dashboard/container';
import NotFoundErrorPage from './containers/dashboard/404';
import Dashboard from './containers/dashboard';

export default (
  <Route path="/">
    <IndexRoute component={LandingPage} />
    <Route path="dashboard" component={Container}>
      <IndexRoute component={Dashboard} />
      <Route path="*" component={NotFoundErrorPage} />
    </Route>
  </Route>
);
