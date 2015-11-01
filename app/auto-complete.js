import React from 'react';

import './auto-complete.scss'

export default class AutoComplete extends React.Component {

  render () {
    var style;

    if (!this.props.token) {
      return null
    }

    style = {
      top: this.props.coords.top + 16,
      left: this.props.coords.left + 30
    };

    return (
      <div className="auto-complete" style={style}>
      {this.props.token.string}
      </div>
    );
  }
}
