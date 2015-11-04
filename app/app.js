import React from 'react';
import Editor from './editor.js';

export default class App extends React.Component {
  render () {
    return (
      <div>
      <header className="header">
      <h1 className="header-title">qwery.me</h1>
      </header>
      <div className="content">
      <Editor />
      <div className="results">
      <h1>Query</h1>
      </div>
      </div>
      </div>
    );
  }
}
