import _ from 'lodash';
import React from 'react';

export default class VariableList extends React.Component {
  render () {
    var {variables} = this.props;

    return (
      <ul className="variable-list">
        {_.map(variables, getVariable)}
      </ul>
    );
  }
}

function getVariable ({type, name, id}) {
  return (
    <li key={id}>
      <button className={'variable-list-option variable-type-' + type.toLowerCase()}>{name}</button>
    </li>
  );
}