var _ = require('lodash');

/*
  3.5 재귀적 사고방식
 */

var nums = [1, 2, 3, 4, 5];
var acc = 0;

var size = nums.length;
for (var i = 0; i < size; i++) {
  acc += nums[i];
}

console.log(acc);
console.log();

// 원소들을 순차적으로 더해가며 결과값을 계산한다.
// for 반복문이 reduce 함수내로 들어가고 사용자에게는 보이지 않으므로
// 이는 로직을 추상해서 reduce 라는 온톨로지를 만든 것이다.
// 가독성 높게 사용하는 방식이다.
var result = _(nums).reduce((acc, current) => acc + current, 0);
console.log(result);
