import _ from 'lodash';
import React from 'react';
import Statement from './statement';
import {deleteStatement} from '../actions';
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

function getStatement ({words, id}) {
  return (
    <Statement
      key={id}
      id={id}
      words={words}/>
  );
}