let obj = {a: 12};
let s1 = Symbol('my');
let s2 = Symbol('my');

Object.defineProperty(obj, s1, {
  enumerable: false
});

obj[s2] = '';

console.log(Object.getOwnPropertySymbols(obj));
