import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import combinedReducers from './reducers/combinedReducers';

const configureStore = () => {
  const persistedData = loadState();
  const store = createStore(combinedReducers, persistedData);

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};

export default configureStore;
