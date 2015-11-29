import React from 'react';
import {connect} from 'react-redux';
import VariableEditor from './variable-editor';
import StatementEditor from './statement-editor';
import ActionButton from './action-button';
import {addStatement} from '../actions';

class App extends React.Component {
  render () {
    var {statements, variables, selection} = this.props;



    return (
      <div>
        <header className="header">
          <h1 className="header-title">qwery.me</h1>
        </header>
        {JSON.stringify(selection)}
        <h2>Search for</h2>
        <VariableEditor variables={variables}/>

        {
          _.keys(variables).length > 0 ?
            <div>
            <h2>Statements</h2>
            <StatementEditor statements={statements}/>
            <ActionButton action={addStatement()}>new statement</ActionButton>
            </div>
            :
            null
        }
      </div>
    );
  }
}

function select (state) {
  var variables = state.variables.toJS();
  var words = state.words.toJS();
  var statements = _.map(state.statements.toJS(), (statement) => {
    return {
      id: statement.id,
      words: _.map(statement.words, (id) => words[id])
    };
  });

  return {
    variables,
    words,
    statements,
    selection: state.selection
  };
}

export default connect(select)(App);
