import _ from 'lodash';
import React from 'react';
import store from '../store';
import VariableList from './variable-list';
import WikidataSearchList from './wikidata-search-list';
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
                          onSelect={(token) => store.dispatch(setWordToken(id, token))}/> : null
        }
        {
          token.type === TOKEN.NONE ?
            <WikidataSearchList type={type} search={token.value}
                                onSelect={(token) => {console.log(token), store.dispatch(setWordToken(id, token))}}/> : null
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