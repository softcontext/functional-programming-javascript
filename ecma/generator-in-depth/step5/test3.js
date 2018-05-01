function* take(n, iterable) {
  for (let x of iterable) {
    if (n <= 0)
      return;
    n--;
    yield x;
  }
}

// function* naturalNumbers() {
//   for (let n = 0;; n++) {
//     yield n;
//   }
// }

// 일반 함수가 실행결과로 이터러블 객체를 리턴해도 되지만 불편하다.
function naturalNumbers() {
  let n = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      return {
        value: n++
      };
    }
  }
}

for (let x of take(3, naturalNumbers())) {
  console.log(x);
}
