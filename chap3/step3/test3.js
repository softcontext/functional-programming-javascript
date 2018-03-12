var _ = require('lodash');

var nums = [1, 2, 3, 4, 5];

function sum(arr, acc=0) {
  if (_.isEmpty(arr)) {
    return acc;
  }
  return sum(_.drop(arr), acc + _.first(arr));
  // 꼬리 위치에서 재귀 호출
  // 재귀와 반복문의 성능을 비교하면 반복문이 더 빨랐다.
  // ES6부터 tail-call optimization 기술이 추가되어 성능차이는 미미하다.
}

/*
sum([1, 2, 3, 4, 5], 0)
sum([2, 3, 4, 5], 0 + 1)
sum([3, 4, 5], 0 + 1 + 2)
sum([4, 5], 0 + 1 + 2 + 3)
sum([5], 0 + 1 + 2 + 3 + 4)
sum([], 0 + 1 + 2 + 3 + 4 + 5)
 */

console.log(sum(nums));
