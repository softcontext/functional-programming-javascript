const R = require('ramda');

function DB(table) {
  return {
    connection: 'OK'
  }
}

function find(db, id) {
  return {
    ssn: id,
    firstname: 'Tom',
    lastname: 'Cruise'
  }
}

/*
  5.1.1
 */

const findObject = R.curry(function (db, id) {
  const result = find(db, id);
  if (!result) {
    throw new Error(`ID가 [${id}] 인 객체는 없습니다.`);
  }
  return result;
});

const findStudent = findObject(DB('students')); // 데이터베이스 질의 능력 객체를 전달한다.

try {
  var result = findStudent('444-44-4444'); // id를 전달하고 학생정보를 구하려고 시도한다.
  console.log(result);
} catch (e) {
  // 호출자에게 예외처리 업무를 부과한다.
  console.log(e.message);
} finally {

}
