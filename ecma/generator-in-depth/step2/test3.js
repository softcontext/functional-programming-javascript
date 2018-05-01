function* genFunc() {
  try {
    console.log('Started');
    yield; // (A)
  } finally {
    yield 'Not done, yet!';
    // 호출측이 끝내라는 요청을 보냈지만 필요하다면
    // 제너레이터 함수에서 보류할 수 있다.
  }
}

let genObj = genFunc();

console.log(genObj.next());
// Started
// { value: undefined, done: false }

console.log(genObj.return('Result'));
// { value: 'Not done, yet!', done: false }

// 아직 끝나지 않았으므로 한번 더 next() 함수를 수행한다.
console.log(genObj.next());
// { value: 'Result', done: true }
