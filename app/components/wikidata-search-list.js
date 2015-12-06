import React from 'react';
import Deferred from '../containers/deferred';
import MatchList from './match-list';
import api from '../api';

export default class WikidataSearchList extends React.Component {
  render () {
    var {type, search} = this.props;

    return (
      <Deferred promise={api.getMatches(type, search)}>
        <MatchList/>
      </Deferred>
    );
  }
}