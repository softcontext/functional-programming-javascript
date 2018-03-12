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

const trim = str => str.replace(/^\s*|\s*$/g, '');
const normalize = str => str.replace(/\-/g, '');

const findObject = R.curry((db, id) => {
  const obj = find(db, id);
  if (obj === null) {
    throw new Error(`ID가 [${id}] 인 객체는 없습니다.`)
  }
  return obj;
});

const findStudent = findObject(DB('students')); // 연동할 데이터베이스 정보를 준다. (외부 의존항목)

const csv = ({ssn, firstname, lastname}) => `${ssn}, ${firstname}, ${lastname}`; // 인수 해체할당

const append = R.curry((elementId, info) => {
  // document.querySelector(elementId).innerHTML = info;
  console.log(`id가 ${elementId}인 엘리먼트에 ${info} 정보를 게시한다.`);
  return info;
});

// 한 함수의 출력은 다음 함수의 입력으로 전달된다.
// 조립설정에서는 코드적으로는 인수를 명시하지 않는 무인수 코딩 방식이다.
// 추상화 수준을 높여서 가독성이 좋아졌다.
const showStudent = R.compose(
  append('#student-info'), // 엘리먼트의 id값을 지정한다. (외부 의존항목)
  csv,
  findStudent,
  normalize,
  trim
);

showStudent('444-44-4444'); // ssn 정보를 주고 학생정보를 구해서 화면에 표시한다.

/*
함수의 파라미터에서 (외부 의존항목)을 커링으로 분리한다.
외부 디펜던시는 부수효과를 유발하기 때문에 격리하는 것이 좋다.
 */
