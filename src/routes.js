import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './containers/home';

export default (
  // <Route path="/" component={DashboardApp}>
  //   <Route path="" component={DashboardContainer}>
  //     <IndexRoute component={Dashboard}/>
  //     <Route path="users">
  //       <IndexRoute component={UsersPage}/>
  //       <Route path=":userId" component={ProfilePage}/>
  //     </Route>
  //     <Route path="*" component={NotFound}/>
  //   </Route>
  //   <Route path="*" component={NotFound}/>
  // </Route>

  <Route path="/" component={ Home } />
);
