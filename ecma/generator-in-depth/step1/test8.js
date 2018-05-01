/*
yield 연산자는 제너레이터 함수 내에서만 사용이 가능하다.
따라서, 제너레이터가 아닌 콜백함수에서는 사용할 수 없다.

function* genFunc() {
  ['a', 'b'].forEach(x => yield x); // SyntaxError
}

forEach 메소드를 for-of 구문으로 바꾸어서 사용하면 yeild 연산자를
사용할 수 있다.
 */

function* genFunc() {
  for (let x of ['a', 'b']) {
    yield x; // OK
  }
}

console.log([...genFunc()]);
