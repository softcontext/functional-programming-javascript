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

/*
  함수 승급
 */

// 함수 반환값이 null 일 수 있으므로 모나드(값 전달 용 컨테이너, 연산종료 용 빈 컨테이너)로
// 감싸는 건 좋지만 함수마다 모나드를 장착하는 건 부담스럽다.
// const safeFindObject = R.curry((db, id) => Maybe.fromNullable(find(db, id)));

// 함수 승급(function lifting)이란 기법을 쓰면 함수에 쉽게 모나드를 장착할 수 있다.
const lift = R.curry((f, value) => Maybe.fromNullable(value).map(f));

const findObject = R.curry((db, id) => find(db, id));

// findObject 함수의 승급을 메소드 체이닝 기법으로 적용한다.
const safeFindObject = R.compose(lift(console.log), findObject);

safeFindObject(DB('student'), '444-44-4444');
