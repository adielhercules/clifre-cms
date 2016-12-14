import { LOAD_STORAGE } from '../actions';

const STORAGE_KEY = 'clifre-vendor';

export const remember = store => {
  function persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState())).catch(e => {
      console.warn('Could not write state to localStorage:', e);
    });
  }

  return next => action => {
    next(action);
    persist();
    return action;
  };
};

export const hydrate = store => {
  const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  store.dispatch({ type: LOAD_STORAGE, localStorage: storage });
};
