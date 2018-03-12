function *coroutine1() {
  yield 2;
  yield 3;
}

function *coroutine2() {
  yield 1;
  yield *coroutine1(); // 구한 이터레이터 객체를 사용하여 분기한다. 'return;' 처리는 생략된다.
  yield *[4, 5]; // 배열은 이터러블 객체다.
  // 'return;' 코드처럼 처리된다.
}

let gener = coroutine2();

console.log(gener.next()); // { value: 1, done: false }
console.log(gener.next()); // { value: 2, done: false }
console.log(gener.next()); // { value: 3, done: false }
console.log(gener.next()); // { value: 4, done: false }
console.log(gener.next()); // { value: 5, done: false }
console.log(gener.next()); // { value: undefined, done: true }
