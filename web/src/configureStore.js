import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import todoApp from './reducers';

const configureStore = () => {
  const persistedData = loadState();
  const store = createStore(todoApp, persistedData);

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};

export default configureStore;
