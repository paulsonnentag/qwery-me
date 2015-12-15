import React from 'react';
import getQuery from './get-query';
import wikiData from './wiki-data';
import ResultTable from './result-table';

export default class QueryRunner extends React.Component {

  constructor () {
    super();
    this.state = {
      result: null,
      showResult: true,
      query: ''
    }
  }

  showQuery () {
    this.setState({
      query: getQuery(this.props.cm),
      showResult: false
    });
  }

  runQuery () {
    var query = getQuery(this.props.cm);

    this.setState({showResult: true});

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
        <button onClick={this.showQuery.bind(this)}>show query</button>

      </div>
        {
          this.state.showResult ?
            <ResultTable result={this.state.result}/>
            :
            <textarea value={this.state.query} style={{width: '100%', height:300}}/>
        }
      </div>
    );
  }
}
