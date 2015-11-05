import React from 'react';
import getQuery from './get-query';
import wikiData from './wiki-data';

export default class QueryRunner extends React.Component {

  constructor () {
    super();
    this.state = {query: {}}
  }

  runQuery () {
    var query = getQuery(this.props.cm);

    wikiData.query(query).then(response => {
      this.setState({query: response});
    });
  }

  render () {
    return (
      <div className="query-runner">
      <button onClick={this.runQuery.bind(this)}>run</button>
      {JSON.stringify(this.state.query)}
      </div>
    );
  }
}
