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

var result = findStudent('444-44-4444').getOrElse(new Student());

console.log('result =', result);
console.log(findStudent('333-33-3333'));
/*
  성공이면:
  result = { ssn: '444-44-4444',
    firstname: 'Tom',
    lastname: 'Cruise',
    address: 'Seoul' }
  Right {
    _value:
     { ssn: '333-33-3333',
       firstname: 'Tom',
       lastname: 'Cruise',
       address: 'Seoul' } }

  실패면:
  result = Student {}
  Left { _value: 'ID가 333-33-3333인 객체를 찾을 수 없습니다.' }
 */
