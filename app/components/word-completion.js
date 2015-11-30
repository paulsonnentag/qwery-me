import _ from 'lodash';
import React from 'react';
import store from '../store';
import VariableList from './variable-list';
import {WORD} from '../types';

export default class WordCompletion extends React.Component {
  render () {
    var {value, type} = this.props;

    return (
      <div className="word-completion">
        {
          type === WORD.ITEM ?
            <VariableList variables={getVariables(value)}/>
            :
            null
        }
      </div>
    );
  }
}

function getVariables (value) {
  return store.getState().variables
    .valueSeq()
    .filter((variable) => _.startsWith(variable.get('name'), value))
    .toJS();
  }