/*
#3. Generators as iterators (data production)
제너레이터 함수를 실행하면 제너레이터 객체가 리턴된다.
제너레이터 객체는 이터러블이자 이터레이터 구현 객체다.

yield* 연산자로 또 다른 제너레이터 객체를 재귀호출 할 수 있다.
 */

function* foo() {
  yield 'a';
  yield 'b';
}

function* bar() {
  yield 'x';
  foo();
  // 제너레이터 함수를 실행해서 제너레이터 객체를 생성한다.
  // 그게 전부다. 결국 아무런 영향을 미치지 않는 코드다.
  // 제너레이터 함수내에서 또 다른 제너레이터 함수를 호출하고
  // 그 결과인 제너레이터 객체를 바로 실행하는 방법이 필요하다.
  // 이런 이유로 yield* 연산자를 도입했다.
  yield 'y';
}

for (let x of bar()) {
  console.log(x);
}
