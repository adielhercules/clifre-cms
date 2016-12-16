/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import fonts from 'google-fonts';
import 'normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
import 'flexboxgrid';

import './style/main.sheet.scss';

import routes from './routes';
import configureStore from './store/configureStore';

import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

//Inject Google-Fonts
fonts.add({
  'Roboto': true,
  'Open Sans': true
});

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
