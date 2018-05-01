function* callee() {
  console.log('callee: ' + (yield));
}

function* caller() {
  while (true) {
    yield* callee();
  }
}

let callerObj = caller();

console.log(callerObj.next());
// { value: undefined, done: false }

console.log(callerObj.next('a'));
// callee: a
// { value: undefined, done: false }

console.log(callerObj.next('b'));
// callee: b
// { value: undefined, done: false }

console.log(callerObj.return());
// { value: undefined, done: true }
