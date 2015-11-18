import _ from 'lodash';
import {combineReducers} from 'redux';
import {ADD_STATEMENT, UPDATE_STATEMENT, DELETE_STATEMENT, ADD_VARIABLE, UPDATE_VARIABLE, DELETE_VARIABLE} from './actions';
import {SUBJECT, PREDICATE, OBJECT} from './components/word';

function statements (statements = [], action) {
  switch (action.type) {
    case ADD_STATEMENT:
      return addStatement(statements, action);

    case UPDATE_STATEMENT:
      return updateStatement(statements, action);

    case DELETE_STATEMENT:
      return deleteStatement(statements, action);
  }

  return statements;
}

function addStatement (statements, action) {
  return statements.concat([[
    getWord(SUBJECT),
    getWord(PREDICATE),
    getWord(OBJECT)
  ]]);
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

function deleteStatement (statements, {pos}) {
  return omitIndex(statements, pos);
}

function variables (variables = [], action) {
  switch (action.type) {
    case ADD_VARIABLE:
      return addVariable(variables);

    case UPDATE_VARIABLE:
      return updateVariable(variables, action);

    case DELETE_VARIABLE:
      return deleteVariable(variables, action);
  }

  return variables
}

function addVariable (variables) {
  return variables.concat([{
    name: null,
    type: null
  }]);
}

function updateVariable (variables, {pos, variable}) {
  var nextVariables = _.cloneDeep(variables);
  nextVariables[pos] = _.extend({}, variables[pos], variable);

  return nextVariables;
}

function deleteVariable (variables, {pos}) {
  return omitIndex(variables, pos);
}

function omitIndex (arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

const qweryMeApp = combineReducers({
  statements,
  variables
});

export default qweryMeApp;
