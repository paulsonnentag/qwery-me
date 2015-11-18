import _ from 'lodash';
import {combineReducers} from 'redux';
import {ADD_STATEMENT, UPDATE_STATEMENT} from './actions';
import {SUBJECT, PREDICATE, OBJECT} from './components/word';

function statements (statements = [], action) {

  switch (action.type) {
    case ADD_STATEMENT:
      return statements.concat([[getWord(SUBJECT), getWord(PREDICATE), getWord(OBJECT)]]);

    case UPDATE_STATEMENT:
      return updateStatement(statements, action);
  }

  return statements;
}

function getWord(type) {
  return {type, value: ''};
}

function updateStatement (statements, {word, wordPos, statementPos}) {
  var nextStatements = _.cloneDeep(statements);
  var prevWord = statements[statementPos][wordPos];
  nextStatements[statementPos][wordPos] = _.extend({}, prevWord, word);
  return nextStatements;
}

const qweryMeApp = combineReducers({
  statements
});

export default qweryMeApp;
