import React from 'react';
import CodeMirror from 'codemirror';

require('codemirror/lib/codemirror.css');


export default class Editor extends React.Component {

  componentDidMount () {
    this._codeMirror = CodeMirror.fromTextArea(this._textArea, {
      lineNumbers: true
    });
  }

  render () {
    return (
      <div>
      <h1>Editor</h1>
      <textarea ref={(el) => this._textArea = el}></textarea>
      </div>
    )
  }
}
