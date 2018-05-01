const R = require('ramda');
const {Either} = require('./test');
const {DB, find, Student} = require('./helper');

const safeFindObject = R.curry((db, id) => {
  const obj = find(db, id);
  if (obj) {
    return Either.of(obj);
  }
  return Either.left(`ID가 ${id}인 객체를 찾을 수 없습니다.`);
});

const findStudent = safeFindObject(DB('student'));

// 성공
var result = findStudent('444-44-4444').getOrElse(new Student());
console.log('result =', result);
// result = { ssn: '444-44-4444',
//   firstname: 'Tom',
//   lastname: 'Cruise',
//   address: 'Seoul' }

// 실패
result = findStudent('333-33-3333');
console.log('result =', result);
// result = Left { _value: 'ID가 333-33-3333인 객체를 찾을 수 없습니다.' }

// 실패: 실패 시 빈 객체로 대체한다.
result = findStudent('333-33-3333').getOrElse(new Student());
console.log('result =', result);
// result = Student {}
