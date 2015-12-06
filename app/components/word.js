import _ from 'lodash';
import React from 'react';
import store from '../store';
import WordCompletion from './word-completion';
import {setWordToken} from '../actions';
import {WORD, TOKEN} from '../types';

export default class Word extends React.Component {
  render () {
    var {token, id, selected, prev, onSelect} = this.props;
    var type = token.subType || token.type;

    return (
      <div className={'word token ' + type.toLowerCase()}>
        {
          token.subType ? <div className={'small icon ' + token.subType.toLowerCase()}/>: null
        }
        <input
          value={token.value}
          onClick={(e) => e.stopPropagation()}
          onFocus={_.partial(onSelect, id)}
          onChange={(e) => store.dispatch(setWordToken(id, getNoneToken(e.target.value)))}/>
        {
          selected ? <WordCompletion {...this.props}/> : null
        }
      </div>
    );
  }
}


function getNoneToken (value) {
  return {
    type: TOKEN.NONE,
    value: value
  }
}