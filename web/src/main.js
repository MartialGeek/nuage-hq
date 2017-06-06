'use strict';

import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import App from './components/App';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedData = loadState();
const store = createStore(todoApp, persistedData);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
