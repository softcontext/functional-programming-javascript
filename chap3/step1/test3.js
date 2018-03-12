var _ = require('lodash');
var {Person, Student, Address, people} = require('../model/data');

var arr = [1, 4, 3, 5, 2];

var sum = _(arr).reduce((a, b) => a+b);

console.log(sum); // 15
