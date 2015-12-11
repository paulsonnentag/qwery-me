import React from 'react';
import _ from 'lodash';

export default class ResultTable extends React.Component {

  render () {
    var {head, results} = this.props;
    var vars = head.vars;
    var headers = _.select(vars, (v, i) => i % 2 === 0);
    var rows = results.bindings;

    console.log(headers);

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
      {
        _.map(headers, header => (
          <td>
            <a href={row[header].value} target="_blank">{row[header + 'Label'].value}</a>
          </td>
        ))
      }
    </tr>
  );
}
