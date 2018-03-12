
/*
  4.3.1 함수 팩토리
 */
var R = require('ramda');

const fetchStudentFromDb = R.curry(function (db, ssn) {
  return {
    ssn,
    name: 'Tom',
    from: 'DB'
  };
});

const fetchStudentFromArray = R.curry(function (arr, ssn) {
  return {
    ssn,
    name: 'Harry',
    from: 'Array'
  };
});

// 환경설정 정보
const useDb = false;

// 사용자는 메소드를 호출할 수 있다는 사실이 중요하지 구현체가 무엇인지는 관심이 없다.
const findStudent = useDb ? fetchStudentFromDb('DB') : fetchStudentFromArray('Array');

// 사용자는 실제 구현체를 모르는 상태에서 사용자가 가진 ssn만을 인수로 주고
// 학생정보를 구할 수 있다.
console.log(findStudent('444-44-4444'));
