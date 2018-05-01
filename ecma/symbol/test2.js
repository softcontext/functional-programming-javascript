let obj = null;
let s1 = null;

(function () {
  let s2 = Symbol();
  s1 = s2;
  obj = {[s2]: 'my'}; // 심볼을 프로퍼티 키로 사용할 때 대괄호가 필요하다.

  console.log(obj[s2]);
  console.log(obj[s2] === obj[s1]);
})();

console.log(obj[s1]);

console.log(Object.getOwnPropertySymbols(obj));
// [ Symbol() ]

console.log(Object.getOwnPropertyDescriptors(obj));
// { [Symbol()]:
//    { value: 'my',
//      writable: true,
//      enumerable: true,
//      configurable: true } }
