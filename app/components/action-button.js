import React from 'react';
import store from '../store';
import {addStatement} from '../actions';

export default class ActionButton extends React.Component {
  render () {
    var {action, children} = this.props;

    return (
      <button
        type="button"
        onClick={() => store.dispatch(action)}>
        {children}
      </button>
    );
  }
}