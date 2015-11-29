import Immutable from 'immutable';
import _ from 'lodash';
import {ADD_STATEMENT, DELETE_STATEMENT} from '../actions';

export default function statements (statements = Immutable.Map(), action) {
  switch (action.type) {
    case ADD_STATEMENT:
      return addStatement(statements, action);

    case DELETE_STATEMENT:
      return deleteStatement(statements, action);
  }

  return statements;
}

function addStatement (statements, {words}) {
  var id = _.uniqueId();
  var statement = Immutable.Map({
    id: id,
    words: words
  });
  return statements.set(id, statement);
}

function deleteStatement (statements, {id}) {
  if (!statements.has(id)) {
    throw new Error (`Can't delete statement, id=${id} does not exit`);
  }

  return statements.delete(id);
}