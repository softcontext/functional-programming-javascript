var _ = require('lodash');

var arr = [1, 4, 3, 5, 2];

var wrapper = _(arr); // 로대쉬 래퍼객체를 만든다. 이 객체로부터 메소드 체이닝이 가능하다.
console.log(wrapper);
console.log();

var result = _(arr).reverse().value(); // 실 처리는 lazy하다. value를 호출할 때 리버스한다.
console.log(result);
console.log();

console.log(arr); // 원본도 변경된다. 순수하지 못하다.
console.log();

var arr2 = [1, 4, 3, 5, 2];
console.log(arr2);
var arr3 = arr2.reverse(); // 원본을 바꾸면서 원본 참조를 리턴도 한다.
console.log(arr2);
console.log(arr3);
console.log(arr2 === arr3);
