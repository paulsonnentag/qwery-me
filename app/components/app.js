import React from 'react';
import {connect} from 'react-redux';
import StatementEditor from './statement-editor';
import AddStatementButton from './add-statement-button';

class App extends React.Component {
  render () {
    var {statements} = this.props;
    return (
      <div>
        <header className="header">
          <h1 className="header-title">qwery.me</h1>
        </header>
        <h1>Statement editor</h1>
        <StatementEditor statements={statements}/>
        <AddStatementButton/>
      </div>
    );
  }
}

function select (state) {
    return state
}

export default connect(select)(App);
