import _ from 'lodash';
import React from 'react';

export default class MatchList extends React.Component {
  render () {
    var {matches, onSelect} = this.props;

    return (
      <div>
        {
          _.map(matches, (matchItem) => {
            var {match, description, id} = matchItem;
            return (
              <button className="wiki-data token"
                      key={id}
                      onClick={() => onSelect(matchItem)}>
                <div className="label">{match}</div>
                <div className="description">{description}</div>
              </button>
            );
          })
        }
      </div>
    );
  }
}