function* take(n, iterable) {
  for (let x of iterable) {
    if (n <= 0)
      return;
    n--;
    yield x;
  }
}

function* naturalNumbers() {
  for (let n = 0;; n++) {
    yield n;
  }
}

// 0부터 1씩 증가하는 정수를 리턴하는 제너레이터 naturalNumbers() 를
// 받는다. 이 값을 제곱승 처리후 리턴하는 애로우함수 mapFunc 에게
// 전달한다.
function* map(iterable, mapFunc) {
  for (let x of iterable) {
    yield mapFunc(x);
  }
}

// 스프레드연산자와 제너레이터를 같이 사용하면 처리된 값들이 배열에 하나씩
// 담긴다.
let arr = [...take(4, map(naturalNumbers(), x => x * x))];
console.log(arr);
// [ 0, 1, 4, 9 ]
