import React from 'react';
import {getQuery, isStatementValid} from '../query-builder';
import api from '../api';
import Deferred from '../containers/deferred';
import JSONOutput from './json-output';

export default class QueryResult extends React.Component {

  shouldComponentUpdate (nextProps) {
    var {nextVariables, nextStatements} = nextProps;
    var {variables, statements} = this.props;

    return getQuery(variables, statements) !== getQuery(nextVariables, nextStatements);
  }

  render () {
    var {variables, statements} = this.props;
    var query;

    if (!_.any(statements, isStatementValid)) {
      return null;
    }

    query = api.query(getQuery(variables, statements));

    query.then((result) => console.log(result));

    return (
      <Deferred promise={query}>
        <div>loading</div>
        <JSONOutput></JSONOutput>
      </Deferred>
    );
  }
}