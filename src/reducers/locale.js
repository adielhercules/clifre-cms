import { createReducer } from 'redux-create-reducer';
import {
  CHANGE_LOCALE
} from '../actions';

const initialState = 'es';

const events = {
  [CHANGE_LOCALE]: (state, { locale }) => {
    return locale;
  }
};

export default createReducer(initialState, events);
