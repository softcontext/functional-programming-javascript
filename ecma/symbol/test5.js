/*
빌트인 심볼
특수 목적으로 미리 만들어진 심볼들이 있다.
 */

const obj = {
  [Symbol.iterator]: '',
  [Symbol.match]: '',
  [Symbol.search]: '',
  [Symbol.replace]: '',
  [Symbol.split]: '',
  [Symbol.hasInstance]: '',
  [Symbol.species]: '',
  [Symbol.unscopables]: '',
  [Symbol.isConcatSpreadable]: '',
  [Symbol.toPrimitive]: '',
  [Symbol.toStringTag]: ''
};

console.log(Object.getOwnPropertySymbols(obj));
