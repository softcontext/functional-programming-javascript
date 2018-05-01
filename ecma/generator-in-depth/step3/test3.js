function* callee() {
  try {
    yield 'b';
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

console.log(genObj.next());
// { value: 'c', done: false }

console.log(genObj.next());
// finally callee
// { value: 'd', done: false }

console.log(genObj.next());
// { value: undefined, done: true }
