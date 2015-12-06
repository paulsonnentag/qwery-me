import _ from 'lodash';
import React from 'react';
import store from '../store';
import VariableList from './variable-list';
import {WORD, TOKEN} from '../types';
import {setWordToken} from '../actions';

export default class WordCompletion extends React.Component {
  render () {
    var {token, id, type} = this.props;

    return (
      <div className="word-completion">
        {
          type === WORD.ITEM ?
            <VariableList variables={getVariables(token.value)}
                          onSelect={_.partial(handleSelect, id)}/>
            :
            null
        }
      </div>
    );
  }
}

function handleSelect (id, variable) {
  store.dispatch(setWordToken(id, {
    type: TOKEN.VARIABLE,
    value: variable.name,
    id: variable.id
  }));
}

function getVariables (value) {
  return store.getState().variables
    .valueSeq()
    .filter((variable) => _.startsWith(variable.get('name'), value))
    .toJS();
}