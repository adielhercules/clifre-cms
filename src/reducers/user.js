import { createReducer } from 'redux-create-reducer';
import {
  USER_FETCHED,
} from '../actions';

const initialState = {
  name: 'Anonymous',
  email: '',
  id: 0,
  birtdate: '',
  avatar: ''
};

const events = {
  [USER_FETCHED]: (state, { user }) => {
    return { ...state, ...user };
  },
};

export default createReducer(initialState, events);
