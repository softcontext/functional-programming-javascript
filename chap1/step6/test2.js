var sort = (arr, direction) => {
  var flag = 1;
  if (direction && typeof direction === 'string' && direction.toUpperCase() === 'DESC') {
    flag = -1;
  }
  return arr.sort((a, b) => (a - b) * flag);
};

var arr = [1,3,5,4,2];

console.log(sort(arr));

console.log(sort(arr, 'desc'));
