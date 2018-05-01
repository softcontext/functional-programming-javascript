/*
generator
일반 함수는 한 번 호출하면 함수로직을 모두 수행한 후 그 결과를 한 번 리턴한다.
제네레이터 함수는 한 번 호출하면 함수를 분할 처리하고 그 결과를 계속해서 리턴할 수 있다.
 */

function* repeat() { // 함수 내 로직이 yield 로 분리되고 나누어서 수행된다.
  yield 1; // { value: 1, done: false } 이터레이터 포맷으로 값을 객체에 담아서 리턴한다.
  yield 2; // yield 는 다음 값을 리턴함을 의미한다.
  yield 3; // yield 는 next() 함수 호출 시 재 시작지점을 의미한다.
  yield 4;
  yield 5;
}

let gener = repeat();
// 제네레이터 함수를 실행하면 함수실행 결과로 이터러블 객체를 리턴한다.
// 이터러블 객체에서 명시적으로 Symbol.iterator 메소드를 실행하여
// 이터레이터 객체를 꺼내지 않고도 이터레이터 객체의 next 메소드를 호출할 수 있다.
// 제네레이터 함수가 아닌 직접 만든 이터러블 객체는 그렇지 못하다.

// console.log(gener.next()); // 사용이 가능함을 확인해 보자.
// console.log(gener.next());
// console.log(gener.next());
// console.log(gener.next());
// console.log(gener.next());
// console.log(gener.next());
// console.log(gener.next());
// console.log();

let gener2 = gener[Symbol.iterator]();
// 이터러블 객체에서 이터레이터 객체를 꺼낸다.

console.log(gener2.next());
// 첫 next() 함수 호출은 제너레이터 함수의 시작을 의미한다.
// () 괄호는 여전히 함수의 호출을 의미하고 yield 나 return 하는 값을 받는다.
console.log(gener2.next());
// 두 번째 부터의 next() 함수 호출은 해당 yield 에서부터 로직이 재 시작함을 의미한다.
console.log(gener2.next());
console.log(gener2.next());
console.log(gener2.next());
console.log(gener2.next());
console.log(gener2.next());
