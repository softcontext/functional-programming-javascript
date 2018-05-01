function* callee() {
  try {
    yield 'b'; // (A)
    yield 'c';
  } finally {
    console.log('finally callee');
  }
}

function* caller() {
  try {
    yield 'a';
    yield* callee();
    yield 'd';
  } catch (e) {
    console.log('[caller] ' + e);
  }
}

let genObj = caller();

console.log(genObj.next());
// { value: 'a', done: false }

console.log(genObj.next());
// { value: 'b', done: false }

console.log(genObj.throw(new Error('Problem!')));
// finally callee
// [caller] Error: Problem!
// { value: undefined, done: true }
