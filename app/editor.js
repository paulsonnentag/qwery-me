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

    this.state = {
      token: null,
      coords: null
    }
  }

  componentDidMount () {
    this._codeMirror = CodeMirror(this._container, {
      lineNumbers: true,
      lineSeperator: '\n',
      value: '?Person "position held" "President of the United states of America"\n?Person "married to" ?Wife',
      mode: 'qwery',
      theme: 'qwery'
    });

    this._codeMirror.on('change', (function (cm, change) {
      var token = cm.getTokenAt(change.from);
      var pos = CodeMirror.Pos(change.from.line, token.start);
      var coords = cm.cursorCoords(pos, 'local');


      if (token.type == 'property' || token.type == 'item') {
	this.setState({
	  token: token,
	  coords: coords
	});

      } else {
	this.setState({token: null, coords: null});
      }
    }).bind(this));
  }

  render () {
    return (
      <div>
      <h1>Editor</h1>
      <div className="editor">
      <div ref={(el) => this._container = el}></div>
      <Hint coords={this.state.coords}>
      <Completion token={this.state.token}/>
      </Hint>
      </div>
      </div>
    )
  }
}
