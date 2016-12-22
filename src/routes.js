import React from 'react';
import { Route, IndexRoute } from 'react-router';

import LandingPage from './containers/landing';
import Container from './containers/dashboard/container';
import NotFoundErrorPage from './containers/dashboard/404';
import Dashboard from './containers/dashboard';
import CardSettings from './containers/dashboard/settings/card-settings';

const Settings = () => {}; //To-do: this will be created later


export default (
  <Route path="/">
    <IndexRoute component={LandingPage} />
    <Route path="dashboard" component={Container}>
      <IndexRoute component={Dashboard} />
      <Route path="settings">
        <IndexRoute component={Settings} />
        <Route path="card" component={ CardSettings } />
      </Route>
      <Route path="*" component={NotFoundErrorPage} />
    </Route>
  </Route>
);
