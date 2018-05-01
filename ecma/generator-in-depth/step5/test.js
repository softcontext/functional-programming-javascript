function* take(n, iterable) {
  for (let x of iterable) {
    if (n-- <= 0)
      return;
    yield x;
  }
}

let arr = ['a', 'b', 'c', 'd'];

for (let x of take(2, arr)) {
  console.log(x);
}
