import React from 'react';
import {updateWord} from '../actions';
import store from '../store';
import {WORD} from '../types';

export default class Word extends React.Component {

  changeHandler (e) {
    store.dispatch({value: e.target.value});
  }

  render () {
    var {value, id, type} = this.props;

    return (
      <input
        className={'word word-type-' + type.toLowerCase()}
        type="text"
        value={value}
        onChange={(e) => store.dispatch(updateWord(id, {value: e.target.value}))}/>
    );
  }
}