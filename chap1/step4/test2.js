let db = {
  find(ssn = '000-00-0000') {
    return {ssn: ssn, firstname: 'Tom', lastname: 'Cruise'};
  }
};

// function showStudent(ssn) {
//   let student = db.find(ssn);
//   if (student !== null) {
//     console.log(student.ssn, student.firstname, student.lastname);
//   } else {
//     throw new Error('Can not find student');
//   }
// }
//
// showStudent('444-44-4444');

var find = (db, id) => {
  // 비순수 함수를 순수 함수로 만들기 위해서 사용하는 외부자원을
  // 파라미터로 받아서 지역화 한 후 사용한다.
  let obj = db.find(id);
  if (obj === null) {
    throw new Error('Can not find student');
  }
  return obj;
};

var csv = student => `${student.ssn},${student.firstname},${student.lastname}`;

var append = (target, info) => {
  target(info);
};

function curry(db, id, find, csv, append, target) {
  let student = find(db, id);
  // 대상 db와 PK인 id 값을 주고 find 함수를 이용하여 student 객체를 구한다.
  let info = csv(student);
  // student 객체의 상태정보를 CSV 포맷의 문자열로 변경한다.
  append(target, info);
  // 출력대상 target에 info 문자열을 표시한다.
}

curry(db, '444-44-4444', find, csv, append, console.log);
