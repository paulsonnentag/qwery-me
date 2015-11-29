import React from 'react';
import {updateWord} from '../actions';
import store from '../store';

export default class Word extends React.Component {

  changeHandler (e) {
    store.dispatch({value: e.target.value});
  }

  render () {
    var {value, id} = this.props;

    return (
      <input
        type="text"
        value={value}
        onChange={(e) => store.dispatch(updateWord(id, {value: e.target.value}))}/>
    );
  }
}