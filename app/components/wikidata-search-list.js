import _ from 'lodash';
import React from 'react';
import Deferred from '../containers/deferred';
import MatchList from './match-list';
import api from '../api';
import {TOKEN} from '../types';

export default class WikidataSearchList extends React.Component {
  render () {
    const {type, search, onSelect} = this.props;

    if (search === '') {
      return null;
    }

    return (
      <Deferred promise={api.getMatches(type, search)}>
        <div className="centered token">
          <div className="spinning load icon"></div>
        </div>
        <MatchList onSelect={({match, id}) => onSelect({id, type: TOKEN.OBJECT, value: match})}/>
      </Deferred>
    );
  }
}