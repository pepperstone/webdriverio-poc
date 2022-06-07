import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';

const StoreProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default StoreProvider;
