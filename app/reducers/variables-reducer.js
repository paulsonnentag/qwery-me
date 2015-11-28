import Immutable from 'immutable'

import {ADD_VARIABLE, UPDATE_VARIABLE, DELETE_VARIABLE} from '../actions';

export default function variables (variables = Immutable.Map(), action) {
  switch (action.type) {
    case ADD_VARIABLE:
      return addVariable(variables);

    case UPDATE_VARIABLE:
      return updateVariable(variables, action);

    case DELETE_VARIABLE:
      return deleteVariable(variables, action);
  }

  return variables;
}

function addVariable (variables) {
  var id = _.uniqueId();
  var variable = Immutable.Map({id});

  return variables.set(id, variable);
}

function updateVariable (variables, {id, variable}) {
  if (!variables.has(id)) {
    throw new Error(`Can't update variable, id=${id} does not exist`);
  }

  return variables.mergeDeepIn([id], variable);
}

function deleteVariable (variables, {id}) {
  if (!variables.has(id)) {
    throw new Error (`Can't delete variable, id=${id} does not exit`);
  }

  return variables.delete(id);
}
