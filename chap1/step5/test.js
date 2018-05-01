var input = [87,90,100];

var sum = arr => arr.reduce((tot, current) => tot + current);
var size = arr => arr.length;
var divide = (total, length) => total / length;

var average = arr => divide(sum(arr), size(arr));
console.log(average(input));
console.log(average(input).toFixed(2));
