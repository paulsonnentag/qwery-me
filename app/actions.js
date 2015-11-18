export const ADD_STATEMENT = 'ADD_STATEMENT';
export const UPDATE_STATEMENT = 'UPDATE_STATEMENT';
export const ADD_VARIABLE = 'ADD_VARIABLE';
export const DELETE_VARIABLE = 'DELETE_VARIABLE';
export const UPDATE_VARIABLE = 'UPDATE_VARIABLE';

export function addStatement () {
  return {type: ADD_STATEMENT};
}

export function updateStatement (statementPos, wordPos, word) {
  return {type: UPDATE_STATEMENT, statementPos, wordPos, word};
}

export function addVariable () {
  return {type: ADD_VARIABLE};
}

export function deleteVariable (pos) {
  return {type: DELETE_VARIABLE, pos};
}

export function updateVariable (variable) {
  return {type: UPDATE_VARIABLE, variable};
}