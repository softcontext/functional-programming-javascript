var array = [0,1,2,3,4,5,6,7,8,9];

array = array.map(function (num) { // high-order function
  return Math.pow(num, 2);
});

console.log(array);
