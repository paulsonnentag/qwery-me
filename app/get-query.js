import _ from 'lodash';

export default function getQuery (cm) {
  var lines = getLines(cm);
  var statements = _.map(lines, getStatement);
  var variables = getAllVariables(lines);

  return getQueryString(variables, statements);
}

function getLines (cm) {
  var i, lines = [];
  for (i = 0; i < cm.lineCount(); i++) {
    lines.push(cm.getLineTokens(i));
  }
  return lines;
}

function getStatement (line) {
  return line.map(tokenToQueryToken).join(' ');
}

function tokenToQueryToken ({type, string}) {
  switch (type) {
    case 'variable':
      return string;

    case 'property-id':
      return 'wdt' + string;

    case 'item-id':
      return 'wd' + string;

    default:
      return '';
  }
}

function getAllVariables (lines) {
  return _(lines)
    .map(getVariables)
    .flatten()
    .pluck('string')
    .unique()
    .value()
}

function getVariables (line) {
  return _.select(line, ({type}) => type == 'variable')
}

function getQueryString (variables, statements) {
  var variableLabels = _.map(variables, v => v + 'Label');

  return [
    'PREFIX wd: <http://www.wikidata.org/entity/>',
    'PREFIX wdt: <http://www.wikidata.org/prop/direct/>',
    'PREFIX wikibase: <http://wikiba.se/ontology#>',
    'PREFIX p: <http://www.wikidata.org/prop/>',
    'PREFIX v: <http://www.wikidata.org/prop/statement/>',
    'PREFIX q: <http://www.wikidata.org/prop/qualifier/>',
    'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>',

    `SELECT ${variables.join(' ')} ${variableLabels.join(' ')} `,
    'WHERE {',
    statements.join('. \n'),
    'SERVICE wikibase:label {bd:serviceParam wikibase:language "en" .}',
    '}'
  ].join('\n');
}
