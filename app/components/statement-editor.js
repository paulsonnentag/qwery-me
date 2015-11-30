import _ from 'lodash';
import React from 'react';
import Statement from './statement';
import {deleteStatement} from '../actions';
import store from '../store';

export default class StatementEditor extends React.Component {
  render () {
    var {statements, selection} = this.props;

    return (
      <div className="statement-editor">
          {_.map(statements, _.partial(getStatement, selection))}
      </div>
    );
  }
}

function getStatement (selection, {words, id}) {
  return (
    <Statement
      selectedWord={selection.statementId === id ? selection.wordId : null}
      key={id}
      id={id}
      words={words}/>
  );
}