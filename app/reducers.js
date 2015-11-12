import {combineReducers} from 'redux';
import {ADD_STATEMENT, UPDATE_STATEMENT} from './actions';
import {SUBJECT, PREDICATE, OBJECT} from './components/word';

function statements (statements = [], action) {

  switch (action.type) {
    case ADD_STATEMENT:
      return statements.concat([[getWord(SUBJECT), getWord(PREDICATE), getWord(OBJECT)]]);

    case UPDATE_STATEMENT:
      return statements;
  }

  return statements;
}

function getWord(type) {
  return {type, value: ''};
}

const qweryMeApp = combineReducers({
  statements
});

export default qweryMeApp;
