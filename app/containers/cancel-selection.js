import _ from 'lodash';
import React from 'react';
import store from '../store';
import {unsetSelection} from '../actions';

export default class CancelSelection extends React.Component {

  render () {
    var {children, selection} = this.props;

    return (
      <div onClick={() => {
        if (!_.isEmpty(selection)) store.dispatch(unsetSelection())
      }}>
        {children}
      </div>
    );
  }
}