import _ from 'lodash';
import React from 'react';
import Word from './word';

export default class Statement extends React.Component {
  render () {
    var {words} = this.props;

    return (
      <div className="statement">
        {_.map(words, (word, i) => <Word {...word} onChange={_.partial(this.props.onUpdate, i)}/>)}
      </div>
    );
  }
}
