export const ADD_STATEMENT = 'ADD_STATEMENT';
export const UPDATE_STATEMENT = 'UPDATE_STATEMENT';

export function addStatement () {
  return {type: ADD_STATEMENT};
}

export function updateStatement (statementPos, wordPos, word) {

  return {type: UPDATE_STATEMENT, statementPos, wordPos, word};
}