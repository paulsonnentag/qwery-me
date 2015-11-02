import fetchJSONP from 'fetch-jsonp';

var HOST = 'https://www.wikidata.org/w/api.php';

var wikiData = {
  getMatches: function (type, search) {
    return fetchJSONP(getMatchesURL(type, search))
      .then((res) => res.json())
      .then((res) => res.search.map(getMatch))

  }
}

function getMatchesURL (type, search) {
  return HOST + '?action=wbsearchentities&search=' + search  + '&format=json&callback=callback&language=en&type=' + type;
}

function getMatch(item) {
  return {
    label: item.label,
    id: item.id,
    match: item.match.text
  };
}

export default wikiData;
