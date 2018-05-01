function* foo() {
  yield 'a';
  yield 'b';
}

function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}

// 제너레이터 객체가 리턴하는 모든 결과를 배열에 담는다.
let arr = [...bar()];
console.log(arr);
// [ 'x', 'a', 'b', 'y' ]

// yield* 연산자는 for-of 구문으로 전환해서 해석하면 이해하기 쉽다.
function* bar() {
  yield '1';
  for (let value of foo()) {
    yield value;
  }
  yield '2';
}
// [ '1', 'a', 'b', '2' ]
