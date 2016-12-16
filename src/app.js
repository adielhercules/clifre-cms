import { compose, createStore, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';
import reducer from './reducers';

export default function configureStore(layerClient, initialState) {
  const finalCreateStore = compose(
    applyMiddleware(
      //middlewares
    ),
    reduxReactRouter({ createHistory }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore);

  return finalCreateStore(reducer, initialState);
}
