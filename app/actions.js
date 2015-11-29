import _ from 'lodash';
import {WORD} from './types';

export const ADD_VARIABLE = 'ADD_VARIABLE';
export const UPDATE_VARIABLE = 'UPDATE_VARIABLE';
export const DELETE_VARIABLE = 'DELETE_VARIABLE';

export const ADD_WORD = 'ADD_WORD';
export const UPDATE_WORD = 'UPDATE_WORD';
export const DELETE_WORD = 'DELETE_WORD';

export const ADD_STATEMENT = 'ADD_STATEMENT';
export const DELETE_STATEMENT = 'DELETE_STATEMENT';

export const SET_SELECTION = 'SET_SELECTION';
export const UNSET_SELECTION = 'UNSET_SELECTION';

export function addVariable (variable) {
  return {type: ADD_VARIABLE, variable};
}

export function updateVariable (id, variable) {
  return {type: UPDATE_VARIABLE, id, variable};
}

export function deleteVariable (id) {
  return {type: DELETE_VARIABLE, id};
}

export function addWord (word) {
  return {type: ADD_WORD, word};
}

export function updateWord (id, word) {
    return {type: UPDATE_WORD, id, word};
}

export function deleteWord (id) {
  return {type: DELETE_WORD, id};
}

export function addStatement () {
  return (dispatch) => {
    var subject = {
      type: WORD.ITEM,
      id: _.uniqueId(),
      value: ''
    };
    var predicate = {
      type: WORD.PROPERTY,
      id: _.uniqueId(),
      prev: subject.id,
      value: '',
    };
    var object = {
      type: WORD.ITEM,
      id: _.uniqueId(),
      prev: predicate.id,
      value: ''
    };

    dispatch(addWord(subject));
    dispatch(addWord(predicate));
    dispatch(addWord(object));
    dispatch({type: ADD_STATEMENT, words: [subject.id, predicate.id, object.id]});
  };
}

export function deleteStatement (statement) {
  return (dispatch) => {
    _.each(statement.words, (word) => dispatch(deleteWord(word.id)));

    dispatch({type: DELETE_STATEMENT, id: statement.id});
  };
}

export function setSelection (statementId, wordId) {
  return {type: SET_SELECTION, statementId, wordId};
}

export function unsetSelection () {
  return {type: UNSET_SELECTION};
}