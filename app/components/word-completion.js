import _ from 'lodash';
import React from 'react';
import store from '../store';
import VariableList from './variable-list';
import {WORD} from '../types';
import {updateWord} from '../actions';

export default class WordCompletion extends React.Component {
  render () {
    var {value, type, id} = this.props;

    return (
      <div className="word-completion">
        {
          type === WORD.ITEM ?
            <VariableList variables={getVariables(value)}
                          onSelect={_.partial(handleSelect, id)}/>
            :
            null
        }
      </div>
    );
  }
}

function handleSelect (id, variable) {
  store.dispatch(updateWord(id, {
    value: variable.name
  }));
}

function getVariables (value) {
  return store.getState().variables
    .valueSeq()
    .filter((variable) => _.startsWith(variable.get('name'), value))
    .toJS();
}