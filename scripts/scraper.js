'use strict';

var _ = require('lodash');
var cheerio = require('cheerio');
var axios = require('axios');
var jsonfile = require('jsonfile')

var api = require('./api');

api.getPropertyList('Person')
  .then(response => cheerio.load(response.data))
  .then(scrapeIds)
  .then(fetchProperties)
  .then((props) => {
    jsonfile.writeFile('person.json', props, function (err) {
      if (!err) {
        console.log('done')
      } else {
        console.log(err);
      }
    });
  })
  .catch((e) => console.log(e));

function scrapeIds ($) {
  return $('.wikitable.sortable tr')
    .has('td')
    .map((i, row) => $(row).children().eq(1).text())
    .get();
}

function fetchProperties (ids) {
  var descriptions = Promise.all(_.map(ids, api.getPropertyData));
  var restrictions = Promise.all(_.map(ids, fetchPropertyRestrictions));
  var popularities = Promise.all(_.map(ids, api.getPropertyPopularity));

  return Promise.all([descriptions, restrictions, popularities])
    .then((response) => {

      return _.reduce(_.zip.apply(null, response), (props, parts) => {
        const des = parts[0];
        const res = parts[1];
        const popularity = parts[2];

        props[des.id] = {
          popularity,
          type: des.datatype,
          label: des.labels.en.value,
          description: des.descriptions.en.value,
          aliases: _.pluck(des.aliases.en, 'value'),
          suggestedValues: res.suggestedValues,
          suggestedValuesText: res.suggestedValuesText
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