import React from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

import './qwery-mode';

export default class Editor extends React.Component {

  componentDidMount () {
    this._codeMirror = CodeMirror(this._container, {
      lineNumbers: true,
      lineSeperator: '\n',
      value: '?Person position held President of the United states of America\n?Person married to ?Wife',
      mode: 'qwery'
    });
  }

  render () {
    return (
      <div>
      <h1>Editor</h1>
      <div ref={(el) => this._container = el}></div>
      </div>
    )
  }
}
