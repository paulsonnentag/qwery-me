import _ from 'lodash';
import React from 'react';
import {updateWord} from '../actions';
import store from '../store';
import {WORD} from '../types';

export default class Word extends React.Component {

  changeHandler (e) {
    store.dispatch({value: e.target.value});
  }

  render () {
    var {value, id, type, onSelect, onUnselect} = this.props;

    return (
      <input
        className={'word word-type-' + type.toLowerCase()}
        type="text"
        value={value}
        onBlur={onUnselect}
        onFocus={_.partial(onSelect, id)}
        onChange={(e) => store.dispatch(updateWord(id, {value: e.target.value}))}/>
    );
  }
}