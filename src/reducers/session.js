import { createReducer } from 'redux-create-reducer';
import {
  AUTHENTICATED,
  COMPLETE_REGISTRATION,
  LOAD_STORAGE,
  SETTINGS_FETCHED
} from '../actions';

const initialState = {
  authenticated: false,
  registered: false
};

const events = {
  [AUTHENTICATED]: (state, { token }) => {
    return { ...state, authenticated: true, token };
  },

  [COMPLETE_REGISTRATION]: (state) => {
    return { ...state, registered: true };
  },

  [LOAD_STORAGE]: (state, { localStorage }) => {
    return { ...state, ...localStorage.session };
  },

  [SETTINGS_FETCHED]: (state, { settings: { id } }) => {
    return { ...state, id };
  },

};

export default createReducer(initialState, events);
