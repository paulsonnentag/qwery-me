import React from 'react';
import {getQuery, isStatementValid} from '../query-builder';
import api from '../api';
import Deferred from '../containers/deferred';
import JSONOutput from './json-output';

export default class QueryResult extends React.Component {

  shouldComponentUpdate ({variables, statements}) {
    return getQuery(variables, statements) !== getQuery(this.props.variables, this.props.statements);
  }

  render () {
    var {variables, statements} = this.props;
    var query;

    if (!_.any(statements, isStatementValid)) {
      return null;
    }

    query = api.query(getQuery(variables, statements));

    return (
      <Deferred promise={query}>
        <div>loading</div>
        <JSONOutput></JSONOutput>
      </Deferred>
    );
  }
}