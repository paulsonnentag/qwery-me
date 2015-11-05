import React from 'react';
import CodeMirror from 'codemirror';
import './qwery-mode';
import Hint from './hint';
import Completion from './completion';
import QueryRunner from './query-runner';

export default class QueryEditor extends React.Component {

  constructor () {
    super();
    this.state = {};
  }

  componentDidMount () {
    var cm = CodeMirror(this._container, {
      lineNumbers: true,
      lineSeperator: '\n',
      value: '?Person "position held":P39 "President of Amerika":Q11696 ',
      mode: 'qwery',
      theme: 'qwery'
    });

    this.setState({cm: cm});
  }

  render () {
    var {cm} = this.state
    var hint, queryRunner;

    if (cm) {
      hint = (
	<Hint cm={cm}>
	<Completion cm={cm} />
	</Hint>
      );

      queryRunner = (
	<QueryRunner cm={cm}/>
      );
    }

    return (
      <div className="query-editor">
      <div className="query-input">
      <div className="query-input-container" ref={(el) => this._container = el}></div>
      {hint}
      </div>
      <div className="query-result">
      {queryRunner}
      </div>
      </div>
    )
  }
}
