import _ from 'lodash';
import React from 'react';
import Statement from './statement';
import {updateStatement, deleteStatement} from '../actions';
import store from '../store';

export default class StatementEditor extends React.Component {
  render () {
    var {statements} = this.props;

    return (
      <div>
          {_.map(statements, getStatement)}
      </div>
    );
  }
}


function getStatement (words, pos) {
  return (
    <Statement
      words={words}
      onUpdate={(wordPos, word) => store.dispatch(updateStatement(pos, wordPos, word))}
      onDelete={() => store.dispatch(deleteStatement(pos))}/>
  );
}