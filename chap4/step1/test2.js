var {Status} = require('./tuple');

const trim = str => str.replace(/^\s*|\s*$/g, '');
const normalize = str => str.replace(/\-/g, '');

const isValid = function (str) {
  if (str.length === 0) {
    return new Status(false, '잘못된 입력입니다. 빈 값일 리 없지요!');
  }
  return new Status(true, '성공!');
};

var result = isValid(normalize(trim('444-44-4444')));
console.log(result);

console.log(result.values());

// console.log(Object.keys(result));
//
// console.log([ '_1', '_2' ].map(function (k) {
//   return this[k];
// }, result));
