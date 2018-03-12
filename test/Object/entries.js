/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
 */

const object1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(object1)[1]);
// expected output: Array ["baz", 42]

const object2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(object2)[2]);
// expected output: Array ["2", "c"]

const object3 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(object3)[0]);
// expected output: Array ["2", "b"]

console.log();

console.log(Object.entries(object1));
// [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]
console.log(Object.entries(object1).map(([key, descriptor]) => key));
// [ 'foo', 'baz' ]
console.log(Object.entries(object1).map(([key, descriptor]) => descriptor));
// [ 'bar', 42 ]

console.log();

console.log(Object.getOwnPropertyNames(object1));
// [ 'foo', 'baz' ]
