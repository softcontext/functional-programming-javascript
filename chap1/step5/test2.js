var input = [88,99,97];

var sum = arr => arr.reduce((tot, current) => tot + current);
var size = arr => arr.length;

var round1 = (number, digits) => number.toFixed(digits);
var round2 = (number, digits) => Math.round(
    number * Math.pow(10, digits)
  ) / Math.pow(10, digits);

var divide = (total, length, round, digits) => {
  var result = total / length;
  if (typeof round === 'function') {
    return round(result, digits);
  }
  return result;
};

var average = (arr, digits) => {
  if (digits && digits > 0) {
    // return divide(sum(arr), size(arr), round1, digits);
    return divide(sum(arr), size(arr), round2, digits);
    // 사용하는 로직을 여러 함수로 잘개 쪼갠 후 사용하는 방식이라면
    // 부분적인 로직의 치환이 쉽다.
  } else {
    return divide(sum(arr), size(arr));
  }
};

console.log(average(input)); // 94.66666666666667
console.log(average(input, 0)); // 94.66666666666667
console.log(average(input, 1)); // 94.7
console.log(average(input, 2)); // 94.67
