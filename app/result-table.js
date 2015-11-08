import React from 'react';
import _ from 'lodash';

export default class ResultTable extends React.Component{

  render  () {
    var {result} = this.props;
    var headers, vars, rows;

    if (result === null) {
      return <div/>;
    }

    vars = result.head.vars;
    headers = vars.slice(0, vars.length / 2);
    rows = result.results.bindings;

    return (
      <table className="result-table">
      <thead>
      <tr>
      {_.map(headers, (header) => <th key={header}>{header}</th>)}
      </tr>
      </thead>
      <tbody>
      {_.map(rows, _.partial(getRow, headers))}
      </tbody>
      </table>
    );
  }
}

function getRow (headers, row) {
  return (
    <tr>
    {  _.map(headers, header => <td><a href={row[header].value} target="_blank">{row[header+'Label'].value}</a></td>)}
    </tr>
  );
}
