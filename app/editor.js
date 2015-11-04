import React from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

import './editor.scss';
import './theme.scss';
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
      value: '?Person "position held" "President of the United states of America"\n?Person "married to" ?Wife',
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
	<Completion cm={this.cm}/>
	</Hint>
      );
    }

    return (
      <div>
      <h1>Editor</h1>
      <div className="editor">
      <div ref={(el) => this._container = el}></div>
      {hint}
      </div>
      </div>
    )
  }
}
