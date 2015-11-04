import React from 'react';
import wikiData from './wiki-data';
import CompletionList from './completion-list';

export default class Completion extends React.Component {

  constructor () {
    super();

    this._keyMap = {
      //     Esc: this.props.
      Up: this.decSelected.bind(this),
      Down: this.incSelected.bind(this),
      Enter: this.setCompletion.bind(this)
    };

    this.state = {
      items: [],
      selected: null
    };
  }

  componentDidMount () {
    this.props.cm.addKeyMap(this._keyMap);
  }

  componentWillUnmount () {
    this.props.cm.removeKeyMap(this._keyMap);
  }

  componentWillReceiveProps ({token}) {
    var search = token.string.slice(1, -1);

    if (search.length === 0) {
      this.setState({items: []});

    } else {
      wikiData.getMatches(token.type, search).then((items) => {
	this.setState({items: items});
      });
    }
  }

  decSelected () {
    var selected = this.state.selected;
    this.setState({selected: selected == null ? -1 : selected - 1})
  }

  incSelected () {
    var selected = this.state.selected;
    this.setState({selected: selected == null ? 0 : selected + 1})
  }

  setCompletion () {
    var {cm} = this.props;
    var {items, selected} = this.state;
    var item = items[selected % items.length];
    var cursor = cm.getCursor();
    var token = cm.getTokenAt(cursor);

    cm.replaceRange(
      '"' + item.match + '"',
      {line: cursor.line, ch: token.start},
      {line: cursor.line, ch: token.end}
    );
  }

  render () {
    return <CompletionList items={this.state.items} selected={this.state.selected}/>;
  }
}
