import React from 'react';
import {VARIABLE} from '../types';
import {addVariable} from '../actions';
import store from '../store';

export default class TypeSelect extends React.Component {

  addVariable (type) {
    store.dispatch(addVariable({type}));
    this.props.toggle();
  }

  render () {
    return (
      <div>
        <button onClick={this.addVariable.bind(this, VARIABLE.PERSON)}>Person</button>
        <button onClick={this.addVariable.bind(this, VARIABLE.EVENT)}>Event</button>
        <button onClick={this.addVariable.bind(this, VARIABLE.PLACE)}>Place</button>
        <button onClick={this.addVariable.bind(this, VARIABLE.ANYTHING)}>Anything</button>
      </div>
    )
  }

}