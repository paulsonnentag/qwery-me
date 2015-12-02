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
      <div className="token-list">
        <button className="person token"
                onClick={this.addVariable.bind(this, VARIABLE.PERSON)}>
          <div className="small person icon"/>
          Person
        </button>
        <button className="event token"
                onClick={this.addVariable.bind(this, VARIABLE.EVENT)}>
          <div className="small event icon"/>
          Event
        </button>
        <button className="place token"
                onClick={this.addVariable.bind(this, VARIABLE.PLACE)}>
          <div className="small place icon"/>
          Place
        </button>
        <button className="work token"
                onClick={this.addVariable.bind(this, VARIABLE.PLACE)}>
          <div className="small work icon"/>
          Work
        </button>
        <button className="anything token"
                onClick={this.addVariable.bind(this, VARIABLE.ANYTHING)}>
          <div className="small anything icon"/>
          Anything
        </button>
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
