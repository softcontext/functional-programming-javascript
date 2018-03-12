/*
generator
일반 함수는 한 번 호출하면 한 번 리턴한다.
제네레이터 함수는 한 번 호출하면 나누어서 여러 번 리턴한다.
 */

function* repeat() { // 함수 내 로직이 yield 로 분리되어 나누어서 수행된다.
  yield 1; // { value: 1, done: false } 값을 객체에 담아서 리턴한다.
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let gener = repeat();
// 제네레이터 함수는 호출결과로 이터러블 객체를 리턴한다.
// 이터러블 객체에서 이터레이터 객체를 명시적으로 꺼내지 않고
// 이터레이터 객체의 next 메소드를 호출할 수 있다.

// console.log(gener.next());
// console.log(gener.next());
// console.log(gener.next());
// console.log(gener.next());
// console.log(gener.next());
// console.log(gener.next());
// console.log(gener.next());

let gener2 = gener[Symbol.iterator]();
// 이터러블 객체에서 이터레이터 객체를 꺼낸다.

console.log(gener2.next()); // next 함수를 호출하면 repeat 함수 내 로직이 작동한다.
console.log(gener2.next());
console.log(gener2.next());
console.log(gener2.next());
console.log(gener2.next());
console.log(gener2.next());
console.log(gener2.next());
