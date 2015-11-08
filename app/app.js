import React from 'react';
import QueryEditor from './query-editor.js';
import StatementEditor from './statement-editor.js';

export default class App extends React.Component {
  render () {
    return (
      <div>
      <header className="header">
      <h1 className="header-title">qwery.me</h1>
      </header>
      <StatementEditor/>
      </div>
    );
  }
}
