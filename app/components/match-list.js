import _ from 'lodash';
import React from 'react';

export default class MatchList extends React.Component {
  render () {
    var {matches} = this.props;

    return (
      <div>
        {
          _.map(matches, ({match, description}) => (
            <div className="wiki-data token">
              <div className="label">{match}</div>
              <div className="description">{description}</div>
            </div>
          ))
        }
      </div>
    );
  }
}