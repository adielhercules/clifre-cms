// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import session from './session';
import user from './user';
import locale from './locale';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  session,
  user,
  locale,
});
