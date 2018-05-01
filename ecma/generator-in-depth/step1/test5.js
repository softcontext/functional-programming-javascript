/*
yield* 구문의 피연산자로 제너레이터 객체만 올 수 있는 것은 아니다.
이터러블 객체라면 모두 가능하다. 배열은 이터러블 구현 객체다.
 */

function* bla() {
  yield 'sequence';

  // yield ['of', 'yielded'];
  // 배열을 그대로 리턴한다.

  yield* ['of', 'yielded'];
  // 배열을 순회하여 낱개로 리턴한다.

  yield 'values';
}

let arr = [...bla()];
console.log(arr);
// [ 'sequence', 'of', 'yielded', 'values' ]

console.log(bla() instanceof bla);
console.log(bla().__proto__ === bla.prototype);
// 제너레이터 함수의 실행결과인 객체는 제너레이터 함수의 prototype 객체의
// 자식객체다.
