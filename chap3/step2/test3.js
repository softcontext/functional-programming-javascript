var _ = require('lodash');
var {Person, Student, Address, people} = require('../model/data');
var persons = require('../model/data').people;

const getCountry = person => person.address.country;

const gatherStats = function (stat, country) {
  if (_.isUndefined(stat[country])) {
    stat[country] = {'name': country, 'count': 0};
  }
  stat[country].count++;

  return stat;
};

var result2 = _(persons).map(getCountry).reduce(gatherStats, {});
console.log(result2);

console.log();

var highestPopulationCountry = _.chain(persons)
  .filter(_.isValid)
  .map(_.property('address.country')) // getCountry
  .reduce(gatherStats, {})
  .values()
  .sortBy('count')
  .reverse()
  .first()
  .value()
  .name;

console.log(highestPopulationCountry);
