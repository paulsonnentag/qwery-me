import React from 'react';
import {connect} from 'react-redux'
import Editor from './editor.js';
import {setLine} from './actions';

class App extends React.Component {
  render () {
    var {dispatch} = this.props;

    return (
      <div>
      <header className="header">
      <h1 className="header-title">qwery.me</h1>
      </header>
      <div className="content">
      <Editor onSetLine={(line, tokens) => dispatch(setLine(line, tokens))}/>
      <div className="results">
      <h1>Query</h1>
      </div>
      </div>
      </div>
    );
  }
}

function select (state) {
  return state;
}

export default connect(select)(App);
