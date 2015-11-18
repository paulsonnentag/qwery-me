import _ from 'lodash';
import React from 'react';
import Statement from './statement';
import {updateStatement} from '../actions';
import store from '../store';

export default class StatementEditor extends React.Component {
  render () {
    var {statements} = this.props;

    return (
      <div>
          {_.map(statements, (words, i) => <Statement words={words} onUpdate={_.partial(handleUpdateStatement, i)} />)}
      </div>
    );
  }
}

function handleUpdateStatement (statementPos, wordPos, word) {
  store.dispatch(updateStatement(statementPos, wordPos, word));
}