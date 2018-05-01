const R = require('ramda');
const {Maybe, Just, Nothing} = require('./test');

function DB(table) {
  return {
    connection: 'OK'
  };
}

function find(db, id) {
  // return {
  //   ssn: id,
  //   firstname: 'Tom',
  //   lastname: 'Cruise',
  //   address: 'Seoul'
  // };

  /* 리턴값을 바꾸어 가면서 테스트 해보자. */

  return null;
}

/*
  p180

  // findStudent :: String -> Maybe(Student)
  function findStudent(ssn)
 */

// 찾는 레코드가 있는지 없는지 예측할 수 없으니
// 조회 결과를 Maybe로 감싸고 연산명 앞에 safe 단어를 붙여서 구분한다.
//
// Maybe.fromNullable: find 함수의 결과는 null일 수 있으므로 사용한다.
// 결과가 있다면 Just 컨테이너에 담고
// 결과가 없다면 Nothing 컨테이너에 담아 리턴한다.
const safeFindObject = R.curry((db, id) => Maybe.fromNullable(find(db, id)));

const safeFindStudent = safeFindObject(DB('student'));

const address = safeFindStudent('444-44-4444').map(R.prop('address'));
console.log(address);
// find 함수가 null을 리턴하면 출력 결과는 Nothing {}
// find 함수가 학생객체를 리턴하면 출력 결과는 Just { _value: 'Seoul' }
console.log('-------------');

address.map(console.log)
console.log(address.getOrElse('학생정보가 존재하지 않습니다'));
// find 함수가 null을 리턴하면 결과는 (조용히 아무것도 안함)
// find 함수가 학생객체를 리턴하면 결과는 'Seoul' 문자열을 출력한다.
