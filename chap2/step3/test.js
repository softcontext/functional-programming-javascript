var obj = {
  id: 1,
  name: 'Tom',
  email: 'tom@cruise.com'
};

console.log(Object.getOwnPropertyDescriptors(obj));
console.log();
// 프로퍼티의 메타속성 Descriptors를 표시한다.

// {
//   id : {
//     value: 1,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   name: {
//     value: 'Tom',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   email: {
//     value: 'tom@cruise.com',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

Object.freeze(obj);

console.log(Object.getOwnPropertyDescriptors(obj));

// {
//   id : {
//     value: 1,
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   name: {
//     value: 'Tom',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   email: {
//     value: 'tom@cruise.com',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   }
// }

console.log(Object.isFrozen(obj)); // true
console.log();

var obj = {
  id: 1,
  name: 'Tom',
  email: 'tom@cruise.com'
};

Object.seal(obj);

console.log(Object.getOwnPropertyDescriptors(obj));

// { id:
//    { value: 1,
//      writable: true,
//      enumerable: true,
//      configurable: false },
//   name:
//    { value: 'Tom',
//      writable: true,
//      enumerable: true,
//      configurable: false },
//   email:
//    { value: 'tom@cruise.com',
//      writable: true,
//      enumerable: true,
//      configurable: false } }

console.log(Object.isSealed(obj)); // true
console.log();

// There is no way to unfreeze or unseal an object has been frozen or sealed.
