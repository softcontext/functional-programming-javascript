var s = Symbol();

console.log(typeof s);

let s1 = Symbol('my');
let s2 = Symbol('my');

console.log(s1 === s2);

/*
객체의 프로퍼티 키는 문자열과 심볼이 가능하다.
 */
