/*
재귀 함수 사용 시 스택이 계속해서 만들어 지게 되어 메모리 낭비가 심하게 된다.
꼬리 호출은 함수 끝 return 문에 부가 연산은 없이 재귀 함수 호출을 적용하는 기법이다.
꼬리 호출을 하면 스택을 새로 만들지 않고 기존 스택을 재 사용한다.
'use strict' 모드를 활성화하면 스택을 재활용하는 꼬리 호출 기법이 적용된다.
 */

'use strict';

function add(a, b) {
  return a + b;
}

function add1(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  return add(a, b); // 꼬리 호출: add 함수가 add1 함수의 스택을 사용한다.
}

function add2(a, b) {
  a = Number.parseInt(a, 10);
  b = Number.parseInt(b, 10);
  return 0 + add(a, b);
  // 꼬리 호출 아님: add2 함수의 0 값을 유지해야 하므로
  // add 함수가 add2 함수의 스택을 재 활용할 수 없다.
}

console.log(add1(1, '2'));
console.log(add2(1, '2'));
