import {SET_SELECTION, UNSET_SELECTION} from '../actions';

export default function selection (selection = {}, action) {

  switch (action.type) {
    case SET_SELECTION:
      return setSelection(selection, action);
    case UNSET_SELECTION:
      return unsetSelection(selection, action);
  }

  return selection;
}

function setSelection (selection, {statementId, wordId}) {
  return {statementId, wordId};
}

function unsetSelection (selection, action) {
  return {};
}