import React from 'react';
import {connect} from 'react-redux';
import VariableEditor from './variable-editor';
import StatementEditor from './statement-editor';
import ActionButton from './action-button';
import {addStatement, addVariable} from '../actions';

class App extends React.Component {
  render () {
    var {statements, variables} = this.props;
    return (
      <div>
        <header className="header">
          <h1 className="header-title">qwery.me</h1>
        </header>
        <h2>Search for</h2>
        <VariableEditor variables={variables}/>
        <ActionButton action={addVariable()}>new variable</ActionButton>

        <h2>Statements</h2>
        <StatementEditor statements={statements}/>
        <ActionButton action={addStatement()}>new statement</ActionButton>
      </div>
    );
  }
}

function select (state) {
    return state
}

export default connect(select)(App);
