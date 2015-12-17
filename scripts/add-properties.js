var _ = require('lodash');
var axios = require('axios');
var RateLimiter = require('limiter').RateLimiter;
var config = require('./config.json');

const HOST = 'https://api.parse.com';

var limiter = new RateLimiter(40, 'second');

const types = {
  EVENT: require('./properties/event.json'),
  GENERIC: require('./properties/generic.json'),
  ORGANIZATION: require('./properties/organization.json'),
  PLACE: require('./properties/place.json'),
  WORK: require('./properties/work.json'),
  PERSON: require('./properties/person.json')
};


var created = 0;

var total = _(types)
  .map(function (properties, type) {


    return _(properties)
      .map(function (prop, id) {

        return [_.assign(getPropObj(prop.label), {primary: true})].concat(_.map(prop.aliases, getPropObj));

        function getPropObj (name) {
          return {
            type: type,
            primary: false,
            name: name,
            description: prop.description,
            valueType: prop.type,
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
              'X-Parse-Master-Key': config.PARSE_MASTER_KEY
            },
            url: HOST + '/1/classes/Property',
            data: prop

          })
            .then((result) => {
              created++;
              console.log('created (' + created + '/' + total +') ' + type + ' ' + prop.name);


            })
            .catch((res) => {
              throw new Error(res);
            });

        });

      })
      .value().length;

  })
  .reduce(function (sum, length) {
    return sum + length;
  }, 0);