/*
iter.next()로 순회하는 것은 불편하다.
대신 for-of 구문을 사용하는 것이 좋다.
 */

function *coroutine() {
  yield 1;
  yield 2;
  yield 3;

}

for (let value of coroutine()) { // iter.next()를 수행한 결과를 value에 담는다.
  console.log(value);
}

let arr = [1, 2, 3];

for (let value of arr) { // 배열은 자동으로 이터레이터객체를 구한다음 처리된다.
  console.log(value);
}
