function* take(n, iterable) {
  for (let x of iterable) {
    if (n > 0) {
      n--;
    } else {
      return;
    }
    yield x;
  }
}

function* naturalNumbers() {
  let n = 0;
  while (true) {
    yield n;
    n++;
  }
}

function* map(iterable, mapFunc) {
  for (let x of iterable) {
    yield mapFunc(x);
  }
}

let arr = [...take(4, map(naturalNumbers(), x => x * x))];
console.log(arr);
// [ 0, 1, 4, 9 ]

function* filter(iterable, filterFunc) {
  for (let x of iterable) {
    if (filterFunc(x)) {
      yield x;
    }
  }
}

let arr2 = [...take(4, filter(naturalNumbers(), x => (x % 2) === 0))];
console.log(arr2);
// [0, 2, 4, 6]
