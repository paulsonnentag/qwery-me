import _ from 'lodash';
import {WORD, TOKEN} from './types';

export const ADD_VARIABLE = 'ADD_VARIABLE';
export const UPDATE_VARIABLE = 'UPDATE_VARIABLE';
export const DELETE_VARIABLE = 'DELETE_VARIABLE';

export const ADD_WORD = 'ADD_WORD';
export const SET_WORD_TOKEN = 'SET_WORD_TOKEN';
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

export function setWordToken (id, token) {
  return {type: SET_WORD_TOKEN, id, token};
}

export function deleteWord (id) {
  return {type: DELETE_WORD, id};
}

export function addStatement () {
  return (dispatch) => {
    var subject = getEmptyWord(WORD.ITEM);
    var predicate = getEmptyWord(WORD.PROPERTY);
    var object = getEmptyWord(WORD.ITEM);

    dispatch(addWord(subject));
    dispatch(addWord(predicate));
    dispatch(addWord(object));
    dispatch({type: ADD_STATEMENT, words: [subject.id, predicate.id, object.id]});
  };
}

function getEmptyWord (wordType) {
  return {
    type: wordType,
    id: _.uniqueId('word_'),
    token: {type: TOKEN.NONE, value: ''}
  }
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