import React from 'react';
import wikiData from './wiki-data';
import CompletionList from './completion-list';

window.wikiData = wikiData;

export default class Completion extends React.Component {

  constructor () {
    super();

    this.state = {
      items: [],
      selected: null
    };
  }

  componentWillReceiveProps ({token}) {
    var search = token.string.slice(1, -1);

    if (search.length === 0) {
      this.setState({items: []});

    } else {
      wikiData.getMatches(token.type, search).then((items) => {
	console.log(items);
	this.setState({items: items});
      });
    }
  }

  render () {
    return <CompletionList items={this.state.items} selected={this.state.selected}/>;
  }
}
