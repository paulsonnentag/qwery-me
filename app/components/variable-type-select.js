import React from 'react';
import {VARIABLE} from '../types';
import {addVariable} from '../actions';
import store from '../store';

export default class VariableTypeSelect extends React.Component {

  addVariable (type) {
    store.dispatch(
      addVariable({
        type,
        name: getVariableName(type)
      })
    );
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

// getVariableName (type)
// returns unique name based on type: type{i}
// i >= 1, increase i until type{i} doesn't exist
function getVariableName (type) {
  var name;
  var names = store.getState().variables.map((variable) => variable.get('name'));
  var i = 1;

  while (true) {
    name = type + i++;
    if (!names.contains(name)) {
      return name;
    }
  }
}
