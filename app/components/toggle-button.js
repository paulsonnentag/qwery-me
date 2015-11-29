import React from 'react';

export default class ToggleButton extends React.Component {
  render () {
    var {toggle, children} = this.props;

    return (
      <button className="toggle-button"
              onClick={toggle}>
        {children}
      </button>
    );
  }
}