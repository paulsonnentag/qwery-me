var _ = require('lodash');
var axios = require('axios');
var RateLimiter = require('limiter').RateLimiter;
var config = require('./config.json');

const HOST = 'https://api.parse.com';


var properties = require('./properties/person.json');


var limiter = new RateLimiter(50, 'second');

var props = _(properties)
  .map(function (prop, id) {
        return [getPropObj(prop.label)].concat(_.map(prop.aliases, getPropObj));

    function getPropObj(name) {
      return {
        name: name,
        description: prop.description,
        type: prop.type,
        popularity: prop.popularity,
        wikiDataID: id
      };
    }
  })
  .flatten()
  .each(function (prop) {

    limiter.removeTokens(1, function () {

      axios({
        method: 'post',
        headers: {
          'X-Parse-Application-Id': config.PARSE_APP_ID,
          'X-Parse-REST-API-Key': config.PARSE_API_KEY
        },
        url: HOST + '/1/classes/Property',
        data: prop

      })
        .then((result) => {
          console.log('created ' + prop.name);

        })
        .catch((res) => {
          console.log(res);
        });

    });

  })
  .value();