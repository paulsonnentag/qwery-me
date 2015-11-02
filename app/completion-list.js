import React from 'react';
import './completion-list.scss'

export default class CompletionList extends React.Component {
  render () {
    return (
      <ul className="completion-list">
      {this.props.items.map(completionItem)}
      </ul>
    );
  }
}


function completionItem (item) {
  return (
    <li key={item.id} className="completion-item">
    <h2 className="completion-item-label">{item.match}</h2>
    {item.description ? <p className="completion-item-description">{item.description}</p> : null}
    </li>
  );
}
