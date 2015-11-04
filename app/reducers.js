import Immutable from 'immutable';
import {combineReducers} from 'redux';
import {SET_LINE} from './actions';

window.Immutable = Immutable;

function lines (lines = Immutable.List(), action) {
  switch(action.type) {
    case SET_LINE:
      return lines.set(action.line, action.tokens)
  }

  return lines;
}

var qweryApp = combineReducers({
  lines
});

export default qweryApp;
