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
      <div className="warning">
      This is a very early alpha version. qwery.me is still under heavy development, so expect things to break.
	If you have any problems, questions or suggestions feel free to contact me: <a href="mailto:Paul.Sonnentag@gmail.com">Paul.Sonnentag@gmail.com</a>
      </div>
      <div className="query-runner-controls">
      <button onClick={this.runQuery.bind(this)}>run</button>
      </div>
      <ResultTable result={this.state.result}/>
      </div>
    );
  }
}
