import _ from 'lodash';
import React from 'react';
import {TOKEN} from '../types';

export default class VariableList extends React.Component {
  render () {
    var {variables, onSelect} = this.props;

    return (
      <div className="token-list">
        {_.map(variables, _.partial(getVariable, onSelect))}
      </div>
    );
  }
}

function getVariable (onSelect, {id, type, name}) {
  return (
    <button key={id}
            className={'token ' + type.toLowerCase()}
            onClick={() => onSelect({type: TOKEN.VARIABLE, id})}>
      <div className={'small icon ' + type.toLowerCase()}/>
      {name}
    </button>
  );
}