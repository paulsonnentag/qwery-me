import React from 'react';

export default class CompletionList extends React.Component {
  render () {
    return (
      <ul className="completion-list">
      {this.props.items.map(completionItem.bind(null, this.props.selected, this.props.onSelect))}
      </ul>
    );
  }
}

function completionItem (selected, onSelect, item, i, items) {
  var selectedClass = (selected % items.length === i) ? ' selected' : '';

  return (
    <li onClick={onSelect} key={item.id} className={'completion-item' + selectedClass }>
    <h2 className="completion-item-label">{item.match}</h2>
    {item.description ? <p className="completion-item-description">{item.description}</p> : null}
    </li>
  );
}
