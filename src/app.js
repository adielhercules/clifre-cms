import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { IndexRoute, Route } from 'react-router';
import { ReduxRouter } from 'redux-router';

import { compose, createStore, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';
import reducer from '../reducers';
import layerMiddleware from '../middleware/layerMiddleware';

export default function configureStore(layerClient, initialState) {
  const finalCreateStore = compose(
    applyMiddleware(layerMiddleware(layerClient)),
    reduxReactRouter({ createHistory }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore);

  return finalCreateStore(reducer, initialState);;
}
