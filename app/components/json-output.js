import React from 'react';

export default class JSONOutput extends React.Component {
  render () {
    var {results} = this.props;


    return (
      <div>
        {JSON.stringify(results)}
      </div>
    );
  }
}