import _ from 'lodash';
import React from 'react';
import Word from './word';
import store from '../store';
import {deleteStatement, setSelection, unsetSelection} from '../actions';

export default class Statement extends React.Component {
  render () {
    var {words, id, selectedWord} = this.props;

    return (
      <div className="token-row">
        {_.map(words, (word) => <Word key={word.id} {...word}
                                      selected={selectedWord === word.id}
                                      onSelect={(wordId) => store.dispatch(setSelection(id, wordId))}/>)}
        <button className="small close icon"
                onClick={() => store.dispatch(deleteStatement({id, words}))}/>
      </div>
    );
  }
}