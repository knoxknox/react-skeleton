import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import axios from 'axios';
import configureAxios from './config/axios';
import configurePretender from './config/pretender';
import configureReduxStore from './config/reduxStore';

import App from './modules/app';

const container = document.getElementById('root');
const isDevelopment = process.env.NODE_ENV === 'development';

configureAxios(axios);
if (isDevelopment) {
  configurePretender();
}

const root = createRoot(container);
const store = configureReduxStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
