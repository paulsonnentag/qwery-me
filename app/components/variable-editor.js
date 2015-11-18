import _ from 'lodash';
import React from 'react';
import Variable from './variable';
import store from '../store';
import {deleteVariable, updateVariable} from '../actions';

export default class VariableEditor extends React.Component {
  render () {
    var {variables} = this.props;

    return (
      <div className="variable-editor">
        {_.map(variables, getVariable)}
      </div>
    );
  }
}


function getVariable (variable, pos) {
  return (
    <Variable
      onDelete={() => store.dispatch(deleteVariable(pos))}
      onUpdate={(variable) => store.dispatch(updateVariable(pos, variable))}
      {...variable}/>
  );
}