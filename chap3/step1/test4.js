var _ = require('lodash');

var {Person, Student, Address, people} = require('../model/data');
var persons = require('../model/data').people;


var result = _(persons).reduce((stat, person) => {
  const country = person.address.country;
  // getCountry 함수로 분리 >> #1
  stat[country] = _.isUndefined(stat[country]) ? 1 : stat[country] + 1;
  return stat;
  // gatherStats 함수로 분리 >> #2
}, {});

console.log(result); // { US: 2, Greece: 1, Hungary: 1 }
console.log();


// #1
const getCountry = person => person.address.country;

// #2
const gatherStats = function (stat, critical) {
  stat[critical] = _.isUndefined(stat[critical]) ? 1 : stat[critical] + 1;
  return stat;
};

var result2 = _(persons).map(getCountry).reduce(gatherStats, {});

console.log(result2);
console.log();


console.log(people.map(p => p.address.country).reduce(
  (obj, country) => {
    // obj[country] = obj[country] ? ++obj[country] : 1;
    obj[country] = ++obj[country] || 1;
    return obj;
  }, {}));
