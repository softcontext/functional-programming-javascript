function* genFunc() {
  try {
    console.log('Started');
    yield; // (A)
  } finally {
    console.log('Exiting');
  }
}

let genObj = genFunc();

console.log(genObj.next());
// Started
// { value: undefined, done: false }

console.log(genObj.return('Result'));
// Exiting
// { value: 'Result', done: true }

// 호출자 측에서 return 메소드를 사용하여 제너레이터 객체의 순환을
// 멈출 수 있다.
