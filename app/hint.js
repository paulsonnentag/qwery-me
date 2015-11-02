import React from 'react';

import './hint.scss'

export default class Hint extends React.Component {

  render () {
    var style;

    if (!this.props.coords) {
      return null;
    }

    style = {
      top: this.props.coords.top + 16,
      left: this.props.coords.left + 30
    };

    return (
      <div className="hint" style={style}>
      {this.props.children}
      </div>
    );
  }
}
