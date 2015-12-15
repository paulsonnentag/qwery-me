import _ from 'lodash';
import {VARIABLE, TOKEN, WORD} from './types';

export function getQuery(variables, statements) {
  const validStatements = _.select(statements, isStatementValid);

  const declarations = _(variables)
    .select(_.partial(containsVariable, validStatements))
    .map(getDeclaraction)
    .value();

  const queryStatements = _.map(statements, getQueryStatement);

  return getQueryString(declarations, queryStatements);
}

function containsVariable (statements, variable) {
  return _.any(statements, ({words}) => {
    return _.any(words, ({token}) => token.id === variable.id);
  });
}

function getDeclaraction ({id}) {
  return `?${id} ?${id}Label`;
}

export function isStatementValid ({words}) {
  return !_.any(words, ({token}) => token.type === TOKEN.NONE);
}

function getQueryStatement ({words}) {
  var statement = _.map(words, getWordString).join(' ');

  return `${statement} .`;
}

function getWordString ({type, token}) {
  if (token.type === TOKEN.VARIABLE) {
    return `?${token.id}`;
  }

  if (type === WORD.ITEM) {
    return `wd:${token.id}`;
  }

  return `wdt:${token.id}`;
}

function getQueryString (declarations, statements) {
  return [
    'PREFIX wd: <http://www.wikidata.org/entity/>',
    'PREFIX wdt: <http://www.wikidata.org/prop/direct/>',
    'PREFIX wikibase: <http://wikiba.se/ontology#>',
    'PREFIX p: <http://www.wikidata.org/prop/>',
    'PREFIX v: <http://www.wikidata.org/prop/statement/>',
    'PREFIX q: <http://www.wikidata.org/prop/qualifier/>',
    'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>',
    `SELECT ${declarations.join(' ')} `,
    'WHERE {',
    statements.join('\n'),
    'SERVICE wikibase:label {bd:serviceParam wikibase:language "en" .}',
    '}',
    'LIMIT 50'
  ].join('\n');
}