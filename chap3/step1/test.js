var _ = require('lodash');
var {Person, Student, Address, people} = require('../model/data');

var result = [];

for (var i = 0; i < people.length; i++) {
  var p = people[i];
  if (p !== null && p !== undefined) {
    result.push(p.fullname);
  }
}

console.log(result);

var result2 = _.map(people, p => (p !== null && p !== undefined) ? p.fullname : '');

console.log(result2);
