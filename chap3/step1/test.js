var _ = require('lodash');
var {Person, Student, Address, people} = require('../model/data');

var result = [];

for (var i = 0; i < people.length; i++) {
  var p = people[i];

  // if (p !== null && p !== undefined) {
  if (p) {
    result.push(p.fullname);
  }
}

console.log(result);
console.log();

// var result2 = _.map(people, p => (p !== null && p !== undefined) ? p.fullname : '');
var result2 = _.map(people, p => p ? p.fullname : '');
console.log(result2);
console.log();

var result3 = people.map(p => p.fullname);
console.log(result3);
