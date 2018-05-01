var _ = require('lodash');

var arr = [1, 4, 3, 5, 2];

var sum = _(arr).reduce((a, b) => a+b);
console.log(sum); // 15
console.log();

var sum2 = arr.reduce((a, b) => a+b);
console.log(sum2);
