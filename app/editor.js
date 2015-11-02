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

    this._keyMap = {
      Up: this.decPos.bind(this),
      Down: this.incPos.bind(this),
      Enter: this.setCompletion.bind(this)
    }

    this.state = {
      token: null,
      coords: null,
      selected: null,
      completion: null
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
	if (this.state.token == null) {
	  cm.addKeyMap(this._keyMap);
	}

	this.setState({
	  token: token,
	  coords: coords
	});

      } else {
	cm.removeKeyMap(this._keyMap);
	this.setState({token: null, coords: null, selected: null, completion: null});
      }
    }).bind(this));
  }

  decPos () {
    var selected = this.state.selected;
    this.setState({selected: selected == null ? -1 : selected - 1})
  }

  incPos () {
    var selected = this.state.selected;
    this.setState({selected: selected == null ? 0 : selected + 1})
  }

  setCompletion () {
    var cursor = this._codeMirror.getCursor();
    var token = this._codeMirror.getTokenAt(cursor);

    this._codeMirror.replaceRange(
      '"' + this.state.completion.match + '"',
      {line: cursor.line, ch: token.start},
      {line: cursor.line, ch: token.end}
    );

    this.setState({token: null, coords: null, selected: null, completion: null});
  }

  handleSelect (completion) {
    this.setState({completion: completion});
  }

  render () {
    return (
      <div>
      <h1>Editor</h1>
      <div className="editor">
      <div ref={(el) => this._container = el}></div>
      <Hint coords={this.state.coords}>
      <Completion token={this.state.token} selected={this.state.selected} onSelect={this.handleSelect.bind(this)}/>
      </Hint>
      </div>
      </div>
    )
  }
}
