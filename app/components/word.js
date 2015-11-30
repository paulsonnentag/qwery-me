import _ from 'lodash';
import React from 'react';
import store from '../store';
import WordCompletion from './word-completion';
import {updateWord} from '../actions';
import {WORD} from '../types';

export default class Word extends React.Component {

  changeHandler (e) {
    store.dispatch({value: e.target.value});
  }

  render () {
    var {value, id, type, selected, prev, onSelect, onUnselect} = this.props;

    return (
      <div className="word">
        <input
          className={'word word-type-' + type.toLowerCase()}
          type="text"
          value={value}
          onBlur={onUnselect}
          onFocus={_.partial(onSelect, id)}
          onChange={(e) => store.dispatch(updateWord(id, {value: e.target.value}))}/>
        {
          selected ? <WordCompletion {...this.props}/> : null
        }
      </div>
    );
  }
}