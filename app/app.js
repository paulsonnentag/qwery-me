import React from 'react';
import QueryEditor from './query-editor.js';

export default class App extends React.Component {
  render () {
    return (
      <div>
      <header className="header">
      <h1 className="header-title">qwery.me <span className="header-tag">alpha</span></h1>
      </header>
      <QueryEditor />
      </div>
    );
  }
}
