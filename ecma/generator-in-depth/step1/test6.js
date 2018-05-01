function* genFuncWithReturn() {
  yield 'a';
  yield 'b';
  return 'The result';
  // 마지막 return 값은 반영되지 않는다.
}

function* logReturned(genObj) {
  let result = yield* genObj;
  console.log('(A) =', result); // (A) = The result

  // yield result;
  // result 값을 반영하고 싶다면 yield 구문을 추가한다.
}

let arr = [...logReturned(genFuncWithReturn())];
console.log(arr); // [ 'a', 'b' ]
