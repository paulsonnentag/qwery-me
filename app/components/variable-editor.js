import _ from 'lodash';
import React from 'react';
import Variable from './variable';
import ActionButton from './action-button';
import store from '../store';
import {deleteVariable, updateVariable, addVariable} from '../actions';

export default class VariableEditor extends React.Component {
  render () {
    var {variables} = this.props;

    return (
      <div className="variable-editor">
        {_.map(variables, getVariable)}
        <ActionButton className="variable-editor-new-btn"
                      action={addVariable()}>add</ActionButton>
      </div>
    );
  }
}

function getVariable (variable) {
  return (
    <Variable
      key={variable.id}
      onDelete={() => store.dispatch(deleteVariable(variable.id))}
      onUpdate={(update) => store.dispatch(updateVariable(variable.id, update))}
      {...variable}/>
  );
}