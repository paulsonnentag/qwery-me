import fetchJSONP from 'fetch-jsonp';

var API_HOST = 'https://www.wikidata.org/w/api.php';
var SPARQL_HOST = 'https://query.wikidata.org/bigdata/namespace/wdq/sparql';

var wikiData = {
  getMatches: function (type, search) {
    return fetchJSONP(getMatchesURL(type, search))
      .then((res) => res.json())
      .then((res) => res.search.map(getItem));
  },

  query: function (query) {
    return fetch(SPARQL_HOST + '?query=' + encodeURIComponent(query) + '&format=json')
      .then(res => res.json())
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