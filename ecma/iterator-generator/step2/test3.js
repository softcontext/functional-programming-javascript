/*
제네레이터 함수를 사용하는 호출자가 제네레이터 함수내 로직의 계속 수행여부를 제어할 수 있다.
 */

function *parallel() {
  yield 1; // 리턴 객체 { value: 1, done: false }
  yield 2; // 리턴 객체 { value: 2, done: false }
  yield 3; // 리턴 객체 { value: 3, done: false }
  return 200; // 리턴 객체 { value: 200, done: true }
}

let iter = parallel();

console.log(iter.next());
console.log(iter.return(200)); // 'yield 1' 로직 앞에서 'return 200;' 코드가 있는 것과 같다.
console.log(iter.next());
console.log(iter.next());
