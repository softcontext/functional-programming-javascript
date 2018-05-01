function* take(n, iterable) {
  for (let x of iterable) {
    if (n <= 0)
      return;
    n--;
    yield x;
  }
}

function* naturalNumbers() {
  // for (let n = 0;; n++) {
  //   yield n;
  // }
  let n = 0;
  while (true) {
    yield Math.pow(n, 3);
    n++;
  }
}

for (let x of take(4, naturalNumbers())) {
  console.log(x);
}
