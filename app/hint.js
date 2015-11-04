import React from 'react';
import CodeMirror from 'codemirror';

const OFFSET_Y = 16;
const OFFSET_X = 30;

export default class Hint extends React.Component {

  constructor () {
    super();

    this.state = {
      token: null,
      coords: null,
    };
  }

  componentDidMount () {
    this.props.cm.on('change', (cm, change) => {
      var token = cm.getTokenAt(change.from);
      var pos = CodeMirror.Pos(change.from.line, token.start);
      var coords = cm.cursorCoords(pos, 'local');

      this.setState(
	isTokenHintable(token) ?
	  {token : token, coords: coords}
	  :
	  {token: null, coords: null}
      );
    });
  }

  render () {
    var {token, hidden, coords} = this.state;
    var {cm, children} = this.props;
    var style;

    if (!token) {
      return null;
    }

    style = {
      top: coords.top + OFFSET_Y,
      left: coords.left + OFFSET_X
    };

    return (
      <div className="hint" style={style}>
      {React.Children.map(children, (child) => React.cloneElement(child, {token: token}))}
      </div>
    );
  }
};

function isTokenHintable (token) {
  return token.type == 'property' || token.type == 'item';
}
