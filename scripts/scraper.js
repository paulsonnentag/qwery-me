var _ = require('lodash');
var cheerio = require('cheerio');
var axios = require('axios');
var jsonfile = require('jsonfile');
var api = require('./api');

var types = [
  'Generic',
  'Person',
  'Organization',
  'Events',
  'Works',
  'Geographical_feature'
];

_.each(types, function (type) {
  api.getPropertyList(type)
    .then(response => cheerio.load(response.data))
    .then(scrapeIds)
    .then(fetchProperties)
    .then((props) => {

      jsonfile.writeFile('./' + type.toLowerCase() + '.json', props, function (err) {
        if (!err) {
          console.log('WROTE: ' + type.toLowerCase() + '.json')
        } else {
          console.log(err);
        }
      });
    })
    .catch((e) => console.log(e));
});

function scrapeIds ($) {
  return $('.wikitable.sortable tr')
    .has('td')
    .map((i, row) => $(row).children().eq(1).text())
    .get();
}

function fetchProperties (ids) {
  var descriptions = Promise.all(_.map(ids, api.getPropertyData));
  //var restrictions = Promise.all(_.map(ids, fetchPropertyRestrictions));
  var popularities = Promise.all(_.map(ids, api.getPropertyPopularity));

  return Promise.all([descriptions, popularities])
    .then((response) => {

      return _.reduce(_.zip.apply(null, response), (props, parts) => {
        const des = parts[0];
        const popularity = parts[1];
        //const res = parts[1];

        if (!des.labels.en) {
          console.log('no en label', des.labels);
        }

        if (!des.descriptions.en) {
          console.log('no en description', des.labels);
        }


        props[des.id] = {
          popularity,
          type: des.datatype,
          label: des.labels.en ? des.labels.en.value : null ,
          description: des.descriptions.en ? des.descriptions.en.value : null,
          aliases: _.pluck(des.aliases.en, 'value'),
          //suggestedValues: res.suggestedValues,
          //suggestedValuesText: res.suggestedValuesText
        };

        return props;

      }, {});
    });
}

function fetchPropertyRestrictions (id) {
  return api.getPropertyPage(id)
    .then((response) => cheerio.load(response.data))
    .then(scrapePropertyRestrictions);
}

function scrapePropertyRestrictions ($) {
  const suggestedValues = $('#mw-content-text tr')
    .has('th:contains("Allowed values")')
    .children()
    .eq(1)
    .find('a')
    .map((i, property) => {
      const $property = $(property);
      return {
        label: $property.contents().eq(0).text(),
        id: $property.attr('title')
      };
    })
    .get();

  const suggestedValuesText = $('#mw-content-text tr')
    .has('th:contains("Allowed values")')
    .children()
    .eq(1)
    .text();

  return {
    suggestedValues,
    suggestedValuesText
  };
}