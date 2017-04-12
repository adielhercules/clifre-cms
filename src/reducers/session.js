import { createReducer } from 'redux-create-reducer';
import {
  USER_AUTHENTICATION_SUCCESS
} from '../actions';

const initialState = {
  authenticated: false,
  registered: false,
  token: null
};

const events = {
  [USER_AUTHENTICATION_SUCCESS]: (state, { token }) => {
    return { ...state, authenticated: true, token };
  }
};

export default createReducer(initialState, events);
