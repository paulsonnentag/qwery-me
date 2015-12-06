import React from 'react';
import {connect} from 'react-redux';
import VariableEditor from './variable-editor';
import StatementEditor from './statement-editor';
import ActionButton from './action-button';
import CancelSelection from '../containers/cancel-selection';
import {addStatement} from '../actions';
import {TOKEN} from '../types';

class App extends React.Component {
  render () {
    var {statements, variables, selection} = this.props;

    return (
      <CancelSelection selection={selection}>
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
            <StatementEditor statements={statements} selection={selection}/>
            <ActionButton action={addStatement()}>new statement</ActionButton>
            </div>
            :
            null
        }
      </CancelSelection>
    );
  }
}

function select (state) {
  var variables = state.variables.toJS();
  var words = state.words.toJS();
  var statements = _.map(state.statements.toJS(), (statement) => {
    return {
      id: statement.id,
      words: _.map(statement.words, (id) => {
        var token;
        var word = words[id];

        if (word.token.type === TOKEN.VARIABLE) {
          token = variables[word.token.id];
          word.token.value = token.name;
          word.token.subType =  token.type;
        }

        return word;
      })
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
