/*
iter.next()로 순회하는 것은 불편하다.
대신 for-of 구문을 사용하는 것이 좋다.
 */

function *coroutine() {
  yield 1;
  yield 2;
  yield 3;
}

// of 다음에 배치하는 제너레이터 함수나 배열은 * 연산자를 생략한다.
for (let value of coroutine()) { // 이터레이터의 next()를 수행한 결과를 value에 담는다.
  console.log(value);
}

console.log();

let arr = [1, 2, 3];

for (let value of arr) { // 배열은 이터레이션 규약이 구현된 객체다.
  console.log(value);
}
