var obj = {
  id: 1,
  name: 'Tom',
  email: 'tom@cruise.com'
};

console.log(Object.getOwnPropertyDescriptors(obj)); // 프로퍼티의 메타속성을 표시한다.

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

const person = Object.freeze(obj);

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
