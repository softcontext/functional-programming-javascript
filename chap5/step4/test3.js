const R = require('ramda');
const {Maybe, Just, Nothing} = require('./test');

function DB(table) {
  return {
    connection: 'OK'
  };
}

function find(db, id) {
  return {
    ssn: id,
    firstname: 'Tom',
    lastname: 'Cruise',
    address: 'Seoul'
  };

  /* 리턴값을 바꾸어 가면서 테스트 해보자. */

  // return null;
}

const safeFindObject = R.curry((db, id) => Maybe.fromNullable(find(db, id)));

const safeFindStudent = safeFindObject(DB('student'));

const userName = safeFindStudent('444-44-4444').map(R.prop('firstname'));

// console.log(userName.value); // TypeError: Can not extract the value of a Nothing

console.log('document.querySelector("#student-firstname").value =',
    userName.getOrElse('이름을 입력하세요'));

/*
  p181
 */

console.log();

const getCountry = (student) => {
  console.log('#1', student.value);
  console.log('#2', student.map(R.prop('school')).value);
  console.log('#3', student.map(R.prop('school')).map(R.prop('address')).value);

  return student
    .map(R.prop('school'))
    .map(R.prop('address'))
    .map(R.prop('country')) // 이 단계 중 하나라도 결과가 Nothing이면 이후 연산은 전부 건너뜁니다.
    .getOrElse('존재하지 않는 국가입니다!');
};

const safeFindStudent2 = (id) => {
  console.log('ssn =', id);
  return Maybe.of({
    ssn: id,
    firstname: 'Tom',
    lastname: 'Cruise',
    school: {
      address: {
        // country: 'Korea'
        country: null
      }
    }
  });
};

const country = R.compose(getCountry, safeFindStudent2);

var result = country('333-33-3333');
console.log('result =', result);
