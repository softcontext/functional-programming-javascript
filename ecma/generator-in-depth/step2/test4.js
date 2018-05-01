// 호출측에서 제너레잍 함수로 에러를 전파할 수 있다.
function* genFunc1() {
  try {
    console.log('Started');
    yield; // (A)
  } catch (error) {
    console.log('Caught: ' + error);
  }
}

let genObj1 = genFunc1();

console.log(genObj1.next());
// Started
// { value: undefined, done: false }

console.log(genObj1.throw(new Error('Problem!')));
// Caught: Error: Problem!
// { value: undefined, done: true }

console.log();

function* genFunc2() {
  console.log('Started');
  yield; // (A)
}

let genObj2 = genFunc2();
console.log(genObj2.next());
// Started
// { value: undefined, done: false }
try {
  console.log(genObj2.throw(new Error('Problem!')));
} catch (e) {
  console.log(e.message);
  // Problem!
}
