import React from 'react';
import getQuery from './get-query';
import wikiData from './wiki-data';
import ResultTable from './result-table';

export default class QueryRunner extends React.Component {

  constructor () {
    super();
    this.state = {result: null}
  }

  runQuery () {
    var query = getQuery(this.props.cm);

    wikiData.query(query)
      .then(result => this.setState({result}));
  }

  render () {
    return (
      <div className="query-runner">
      <button onClick={this.runQuery.bind(this)}>run</button>
      <ResultTable result={this.state.result}/>
      </div>
    );
  }
}
