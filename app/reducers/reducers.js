import _ from 'lodash';
import {combineReducers} from 'redux';
import words from './words-reducer';
import variables from './variables-reducer';
import statements from './statements-reducer';
import selection from './selection-reducer';
import {ADD_STATEMENT, DELETE_STATEMENT, ADD_VARIABLE, UPDATE_VARIABLE, DELETE_VARIABLE} from './../actions';

const qweryMeApp = combineReducers({
  words,
  variables,
  statements,
  selection
});

export default qweryMeApp;