import _ from 'lodash';
import fetchJSONP from 'fetch-jsonp';

var API_HOST = 'https://www.wikidata.org/w/api.php';
var SPARQL_HOST = 'https://query.wikidata.org/bigdata/namespace/wdq/sparql';

var wikiData = {
  getMatches: function (type, search) {
    return fetchJSONP(getMatchesURL(type, search))
      .then((res) => res.json())
      .then((res) => ({matches: _.map(res.search, getItem)}))
  },

  query: function (query) {
    return fetch(SPARQL_HOST + '?query=' + encodeURIComponent(query) + '&format=json')
      .catch(() => alert('there seems to be an error with your query!'))
      .then(res => res.json());
  }
};

function getMatchesURL (type, search) {
  return API_HOST + '?action=wbsearchentities&search=' + search  + '&format=json&callback=callback&language=en&type=' + type;
}

function getItem(item) {
  return {
    description: item.description,
    label: item.label,
    id: item.id,
    match: item.match.text
  };
}

export default wikiData;