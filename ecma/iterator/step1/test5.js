/*
빌트인 심볼
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
