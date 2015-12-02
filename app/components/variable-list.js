import _ from 'lodash';
import React from 'react';

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

function getVariable (onSelect, variable) {
  var {type, name, id} = variable;
  return (
    <div key={id}>
      <button className={'token ' + type.toLowerCase()}
              onClick={() => {onSelect(variable), console.log("foo")}}>
        <div className={'small icon ' + type.toLowerCase()}/>
        {name}
      </button>
    </div>
  );
}