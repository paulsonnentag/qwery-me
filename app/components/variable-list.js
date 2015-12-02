import _ from 'lodash';
import React from 'react';

export default class VariableList extends React.Component {
  render () {
    var {variables} = this.props;

    return (
      <div className="token-list">
        {_.map(variables, getVariable)}
      </div>
    );
  }
}

function getVariable ({type, name, id}) {
  return (
    <div key={id}>
      <button className={'token ' + type.toLowerCase()}>
        <div className={'small icon ' + type.toLowerCase()}/>
        {name}
      </button>
    </div>
  );
}