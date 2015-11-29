import React from 'react';
import {VARIABLE} from '../types';
import {addVariable} from '../actions';
import store from '../store';

export default class VariableTypeSelect extends React.Component {

  addVariable (type) {
    store.dispatch(addVariable({type}));
    this.props.toggle();
  }

  render () {
    return (
      <div className="variable-type-select">
        <button className="variable-type-select-option variable-type-person"
                onClick={this.addVariable.bind(this, VARIABLE.PERSON)}>Person</button>
        <button className="variable-type-select-option variable-type-event"
                onClick={this.addVariable.bind(this, VARIABLE.EVENT)}>Event</button>
        <button className="variable-type-select-option variable-type-place"
                onClick={this.addVariable.bind(this, VARIABLE.PLACE)}>Place</button>
        <button className="variable-type-select-option variable-type-anything"
                onClick={this.addVariable.bind(this, VARIABLE.ANYTHING)}>Anything</button>
      </div>
    )
  }

}