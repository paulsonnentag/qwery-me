var axios = require('axios');
var RateLimiter = require('limiter').RateLimiter;

var limiter = new RateLimiter(30, 'second');

function limitedGet (url) {

  return new Promise(function (resolve, reject) {

    limiter.removeTokens(1, function () {
      console.log('GET ' + url);

      resolve(axios.get(url));
    });
  })
}

module.exports = {

  getPropertyList (type) {
    return limitedGet('https://www.wikidata.org/wiki/Wikidata:List_of_properties/' + type)
  },

  getPropertyData (id) {
    return limitedGet('https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&ids=' + id)
      .then(response => response.data.entities[id])
  },

  getPropertyPage (id) {
    return limitedGet('https://www.wikidata.org/wiki/Property_talk:' + id);
  },

  getPropertyPopularity (id) {
    var query = [
      'PREFIX wdt: <http://www.wikidata.org/prop/direct/>',
      'SELECT (count(*) as ?count) WHERE {',
      '?p1 wdt:' + id + ' ?p2 .',
      '}'
    ].join('\n');
    var url = 'https://query.wikidata.org/bigdata/namespace/wdq/sparql?query=' + encodeURIComponent(query);

    return limitedGet(url)
      .then(response => {
        var count = response.data.results.bindings[0].count;

        if (count === undefined) {
          console.log('something fudged', response);
        }

        return parseInt(count ? count.value : 0, 10);
      });
  }
};