const R = require('ramda');

function DB(table) {
  return {
    connection: 'OK',
    table
  }
}

function find(db, id) {
  console.log(db, '로부터 정보를 조회한다.');
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
  // 호출자는 예외처리 업무를 수행해야 한다.
  // 에러는 findStudent 함수내에서 발생하는데 에러를 조치하는 코드가
  // 동떨어진 지점에 있어서 비지역성(non-locality) 원리에 위배된다.
  // 에러가 나면 함수는 지역 스택과 환경에서 벗어난다.
  console.log(e.message);
}
