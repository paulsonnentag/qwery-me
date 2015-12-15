import React from 'react';

export default class ToggleButton extends React.Component {
  render () {
    var {toggle, children, className} = this.props;

    return (
      <button className={className}
              onClick={toggle}>
        {children}
      </button>
    );
  }
}