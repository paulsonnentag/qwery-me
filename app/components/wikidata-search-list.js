import React from 'react';
import Deferred from '../containers/deferred';
import MatchList from './match-list';
import api from '../api';
import {TOKEN} from '../types';

export default class WikidataSearchList extends React.Component {
  render () {
    var {type, search, onSelect} = this.props;

    return (
      <Deferred promise={api.getMatches(type, search)}>
        <MatchList onSelect={({match, id}) => onSelect({id, type: TOKEN.OBJECT, value: match})}/>
      </Deferred>
    );
  }
}