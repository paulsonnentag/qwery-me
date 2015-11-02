import React from 'react';
import wikiData from './wiki-data';
import CompletionList from './completion-list';

export default class Completion extends React.Component {

  constructor () {
    super();

    this.state = {
      items: []
    };
  }

  componentWillReceiveProps (props) {
    var search = props.token.string.slice(1, -1);

    wikiData.getMatches(props.token.type, search).then(function (items) {
      this.setState({items: items});
      this.props.onSelect(items[this.props.selected % items.length])

    }.bind(this));
  }

  render () {
    return <CompletionList items={this.state.items} selected={this.props.selected}/>;
  }
}
