/*
Why does instanceof return false for some literals?
https://stackoverflow.com/questions/203739/why-does-instanceof-return-false-for-some-literals
 */

// Primitive Type
console.log(12.21 instanceof Number); // false
console.log(12.21 instanceof Object); // false

console.log("foo" instanceof String); // false
console.log("foo" instanceof Object); // false

console.log(true instanceof Boolean); // false
console.log(true instanceof Object); // false

console.log();

// Reference Type
console.log(new String('foo') instanceof String); // true
console.log(new String('foo') instanceof Object); // true

console.log();

// Reference Type
console.log([0, 1] instanceof Array); // true
console.log([0, 1] instanceof Object); // true

console.log(function () {} instanceof Function); // true
console.log(function () {} instanceof Object); // true

console.log({0: 1} instanceof Object); // true

console.log(/foo/ instanceof RegExp); // true
console.log(/foo/ instanceof Object); // true

console.log();

/*
자료형 7가지
string, number, boolean
undefined, null,
object, symbol
 */
var x;
console.log(x, typeof x); // undefined 'undefined'
console.log(x instanceof Object); // false

var y = null;
console.log(y, typeof y); // null 'object'
console.log(y instanceof Object); // false

console.log();

var s = Symbol('self'); // 매번 새 심볼을 생성한다.
console.log(s, typeof s); // Symbol(self) 'symbol'
console.log(s instanceof Symbol); // false
// 심볼은 래퍼로 객체인데 왜 false인가? 상속 확장을 하지말라는 뜻일까?
console.log(s instanceof Object); // false
console.log(s.__proto__ === Symbol.prototype); // true
console.log(s.__proto__.__proto__ === Object.prototype); // true

console.log();

/*
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol

심볼(symbol) 은 고유하고 수정 불가능한 데이터 타입이며 주로 객체 속성(object property)들의 식별자로 사용된다. 심볼 객체(symbol object) 는 심볼 기본형 변수(primitive data type) 의 암묵적(implicit) 객체 래퍼(wrapper)이다.
 */

console.log(Object.getOwnPropertyNames(Symbol.prototype));
// [ 'constructor', 'toString', 'valueOf' ]

console.log(Symbol.prototype.toString.call(s)); // Symbol(self)
console.log(s.toString()); // Symbol(self)
