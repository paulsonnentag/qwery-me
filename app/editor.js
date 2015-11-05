import React from 'react';
import CodeMirror from 'codemirror';

import './qwery-mode';
import Hint from './hint';
import Completion from './completion';

export default class Editor extends React.Component {

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
    var hint;

    if (this.state.cm) {
      hint = (
	<Hint cm={this.state.cm}>
	<Completion cm={this.state.cm} />
	</Hint>
      );
    }

    return (
      <div className="editor">
      <div className="editor-container" ref={(el) => this._container = el}></div>
      {hint}
      </div>
    )
  }
}
