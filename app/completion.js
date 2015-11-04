import React from 'react';
import wikiData from './wiki-data';
import CompletionList from './completion-list';

export default class Completion extends React.Component {

  constructor () {
    super();

    this.state = {
      items: [{match: 'foo', description: 'another description for long'}]
    };
  }

  render () {
    return <CompletionList items={this.state.items} selected={this.props.selected}/>;
  }
}
