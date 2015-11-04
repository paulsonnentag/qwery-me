
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './app';
import qweryApp from './reducers';
import '../style/main.scss';

var store = createStore(qweryApp);
var appElement = document.getElementById('app');

store.subscribe(() => console.log(store.getState().lines.toJS()));

render(<Provider store={store}><App/></Provider>, appElement);
