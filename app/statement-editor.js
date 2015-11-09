import React from 'react';
import Statement from './statement';

export default class StatementEditor extends React.Component {

  constructor () {
    super();

    this.state = {statements: []};
  }

  render () {
    return (
      <div>
      <h1>Statement Editor</h1>
      <Statement/>
      </div>
    );
  }
}
