function *coroutine1() {
  yield 2;
  yield 3;
}

function *coroutine2() {
  yield 1;
  yield *coroutine1();
  // 또 다른 제너레이터 함수로 처리를 분기하고자 할 때 * 연산자를 붙인다.
  // coroutine1() 함수는 제너레이터 함수이므로 * 연산자를 붙여야 한다.
  // 이를 좀더 자세히 얘기하자면 coroutine1() 제너레이터 함수를 실행하면
  // 이터러블 객체를 리턴하는되 바로 이터레이터의 next() 함수를 호출하여
  // 로직 처리를 연동하기 위한 표시로 * 연산자를 붙이는 것이다.
  // coroutine1() 함수내 로직이 모두 끝나면(생략된 'return;' 구문을 만나면)
  // 다음 next() 함수 호출 시 재 시작지점은 위 yield 위치가 된다.
  yield *[4, 5]; // 배열은 이터레이션 구현 객체다.
  // 리턴구문이 생략되면 'return;' 코드처럼 처리된다.
}

let iter = coroutine2();

console.log('1 >>', iter.next()); // { value: 1, done: false }
console.log('2 >>', iter.next()); // { value: 2, done: false }
console.log('3 >>', iter.next()); // { value: 3, done: false }
console.log('4 >>', iter.next()); // { value: 4, done: false }
console.log('5 >>', iter.next()); // { value: 5, done: false }
console.log('6 >>', iter.next()); // { value: undefined, done: true }

/*
두 개의 제너레이터 함수 내 yield 단어가 5번 있는 것은
- 5번 중간 처리결과를 리턴한다는 것을 의미한다.
- 5곳의 재 시작지점이 있음을 의미한다.
- 6번째 next() 함수의 호출 결과는 { value: undefined, done: true } 일 것임을 의미한다.
 */
