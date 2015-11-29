import React from 'react';
import store from '../store';
import {addStatement} from '../actions';

export default class ActionButton extends React.Component {
  render () {
    var {action, className, children} = this.props;

    return (
      <button
        type="button"
        className={className}
        onClick={() => store.dispatch(action)}>
        {children}
      </button>
    );
  }
}