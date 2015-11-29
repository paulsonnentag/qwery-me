import _ from 'lodash';
import React from 'react';
import Word from './word';
import store from '../store';
import {deleteStatement} from '../actions';

export default class Statement extends React.Component {
  render () {
    var {words, id} = this.props;

    return (
      <div className="statement">
        {_.map(words, (word) => <Word key={word.id} {...word}/>)}
        <button className="close-btn"
                onClick={() => store.dispatch(deleteStatement({id, words}))}/>
      </div>
    );
  }
}