function some(x) {
  console.log('consumme value =', x);
  return provider(x);
}

function* provider(x) {
  yield x * 1;
  yield x * 2;
  yield x * 3;
}

function* supplier() {
  yield 1;
  for (let x of [10, 20, 30]) {
    yield* some(x);
  }
  yield 2;
}

for (let x of supplier()) {
  console.log(x);
}
