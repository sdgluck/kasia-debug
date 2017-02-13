import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={Store()}>
    <App slug='sobre' />
  </Provider>,
  document.getElementById('root')
);
