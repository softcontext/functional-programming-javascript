// 이것은 가짜 데이터베이스이다.
let db = {
  find(ssn = '000-00-0000') {
    return {ssn: ssn, firstname: 'Tom', lastname: 'Cruise'};
  }
};

function showStudent(ssn) {
  // 데이터베이스는 대표적인 외부자원이다.
  // 외부자원을 사용하는 함수는 순수 함수가 아니다.
  let student = db.find(ssn);
  if (student !== null) {
    console.log(student.ssn, student.firstname, student.lastname);
  } else {
    throw new Error('Can not find student');
  }
}

showStudent('444-44-4444');
