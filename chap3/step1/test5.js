var _ = require('lodash');
var {Person, Student, Address, people} = require('../model/data');
var persons = require('../model/data').people;

const bornIn1903 = person => person.birthYear === 1903;
const fullname = person => person.fullname;

var result = _(persons).filter(bornIn1903).map(fullname).join(' and ');
console.log(result);

console.log();

/*
  array comprehension(배열 축약): ES7 제안서에 포함 됨
 */
// var result2 = [for (p of people) if (p.birthYear === 1903) p.fullname].join(' and ');
// console.log(result2);
