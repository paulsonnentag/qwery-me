import _ from 'lodash';
import React from 'react';
import Variable from './variable';
import store from '../store';
import {deleteVariable} from '../actions';

export default class VariableEditor extends React.Component {
  render () {
    var {variables} = this.props;

    return (
      <div className="variable-editor">
        {_.map(variables, (variable, i) => <Variable onDelete={_.partial(handleDeleteVariable, i)} {...variable}/> ) }
      </div>
    );
  }
}

function handleDeleteVariable (pos) {
  store.dispatch(deleteVariable(pos));
}