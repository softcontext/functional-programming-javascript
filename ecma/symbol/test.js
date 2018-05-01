var s = Symbol();

console.log(typeof s); // symbol

let s1 = Symbol('my'); // 심볼 생성 시 디버깅 목적으로 문자열을 설정할 수 있다.
let s2 = Symbol('my');

console.log(s1 === s2); // false: 심볼값은 유니크하다.

/*
객체의 프로퍼티 키 값으로 문자열과 심볼을 사용할 수 있다.
 */
