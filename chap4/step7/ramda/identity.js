const R = require('ramda');

/*
A function that does nothing
but return the parameter supplied to it.
Good as a default or placeholder function.
 */

console.log(R.identity(1)); // 1

var obj = {};

console.log(R.identity(obj) === obj); // true
