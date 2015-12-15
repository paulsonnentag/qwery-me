import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/app';

import '../style/main.scss';

var appElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  appElement
);
