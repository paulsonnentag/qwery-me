import React from 'react';
import store from '../store';
import {addStatement} from '../actions';

export default class AddStatementButton extends React.Component {
  render () {
    return (
      <button
         type="button"
        onClick={() => store.dispatch(addStatement())}>
        add statement
      </button>
    );
  }
}