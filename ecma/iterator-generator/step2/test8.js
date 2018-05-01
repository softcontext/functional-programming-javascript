function some() {
  return provider();
}

function* provider() {
  yield 10;
  yield 20;
  yield 30;
}

function* supplier() {
  yield 1;
  yield* some();
  yield 2;
}

for (let x of supplier()) {
  console.log(x);
}
