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
    var {onSetLine} = this.props;
    var cm = CodeMirror(this._container, {
      lineNumbers: true,
      lineSeperator: '\n',
      mode: 'qwery',
      theme: 'qwery'
    });

    this.setState({cm: cm});

    cm.on('change', (cm, change) => {
      var line = change.from.line
      var tokens = cm.getLineTokens(line);
      onSetLine(line, tokens);
    });
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
