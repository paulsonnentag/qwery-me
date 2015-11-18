import _ from 'lodash';
import React from 'react';
import Word from './word';
import store from '../store';
import {deleteStatement} from '../actions';

export default class Statement extends React.Component {
  render () {
    var {words, onDelete} = this.props;

    return (
      <div className="statement">
        {_.map(words, (word, i) => <Word {...word} onChange={_.partial(this.props.onUpdate, i)}/>)}
        <button onClick={onDelete}>delete</button>
      </div>
    );
  }
}