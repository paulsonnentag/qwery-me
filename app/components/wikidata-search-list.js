import React from 'react';
import Deferred from '../containers/deferred';
import MatchList from './match-list';
import api from '../api';
import {TOKEN} from '../types';

export default class WikidataSearchList extends React.Component {
  render () {
    const {type, search, onSelect} = this.props;
    const matches = (search === '') ? Promise.resolve([]) : api.getMatches(type, search);

    return (
      <Deferred promise={matches}>
        <div className="centered token">
          <div className="spinning load icon"></div>
        </div>
        <MatchList onSelect={({match, id}) => onSelect({id, type: TOKEN.OBJECT, value: match})}/>
      </Deferred>
    );
  }
}