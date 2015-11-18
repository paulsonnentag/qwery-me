import _ from 'lodash';
import React from 'react';

export default class VariableEditor extends React.Component {
  render () {
    var {variables} = this.props.variables;

    return (
      <div className="variable-editor">
        {_.map(variables, (variable) => <Variable {...variable} />)}
      </div>
    );
  }
}