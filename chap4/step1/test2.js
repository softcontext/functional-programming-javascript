var {Status} = require('./tuple');
// Boolean, String 형태의 튜플인지 확인하는 Status 함수를 임포트한다.

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
// _T { _1: true, _2: '성공!' }

console.log(result.values());
// [ true, '성공!' ]
// 객체 속성의 값만 구한다.

console.log(Object.keys(result));
// [ '_1', '_2' ]
// 객체 속성의 키값만 구한다.
