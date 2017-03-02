import { createReducer } from 'redux-create-reducer';
import {
  AUTHENTICATED
} from '../actions';

const initialState = {
  authenticated: false,
  registered: false,
  token: null
};

const events = {
  [AUTHENTICATED]: (state, { token }) => {
    return { ...state, authenticated: true, token };
  }
};

export default createReducer(initialState, events);
