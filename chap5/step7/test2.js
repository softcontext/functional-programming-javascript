const R = require('ramda');
// const _ = require('lodash');

/*
  p194
  모든 컨테이너에서 작동하는 일반화된 map, chain 함수
 */
const map = R.curry((f, container) => container.map(f));
const chain = R.curry((f, container) => container.chain(f));

const {Maybe} = require('../step4/test');
const {Either} = require('../step5/test');
const {IO} = require('../step6/class.io.monad');
const {DB, find} = require('../step5/helper');

const cleanInput = (value) => value;

const validLength = (len, str) => str.length === len;
const checkLengthSsn = (ssn) => validLength(11, ssn) ?
  Either.right(ssn) : Either.left('잘못된 SSN입니다.');

const safeFindObject = R.curry((db, id) => {
  const val = find(db, id);
  return val ? Either.right(val) : Either.left(`ID가 ${id}인 객체를 찾을 수 없습니다.`);
});
const findStudent = safeFindObject(DB('student'));

const csv = (arr) => arr.join(',');
const append = R.curry(function (elementId, info) {
    console.log(info);
    return info;
});

/*
  p197
 */

const lift = R.curry((f, obj) => Maybe.fromNullable(f(obj)));

const liftIO = function (val) {
  return IO.of(val);
};

const getOrElse = R.curry((message, container) => container.getOrElse(message));

const showStudent = R.compose(
  map(append('#student-info')),
  liftIO,
  getOrElse('학생을 찾을 수 없습니다!'),
  map(csv),
  map(R.props(['ssn', 'firstname', 'lastname'])),
  chain(findStudent),
  chain(checkLengthSsn),
  lift(cleanInput)
);

let result = showStudent('444-44-4444').run();
console.log('result =', result);
console.log('----------------------');

let result2 = showStudent('xxx-xx-xxxx').run();
console.log('result2 =', result2);
console.log();

/*
모나드는 데이터의 관점에서 데이터의 흐름을 제어한다.
모나드로 테스트하기 좋은 가독성 좋은 코드를 얻을 수 있다.
합성과 모나드는 함수형 프로그래밍의 생태계를이루는 양대 개념이다.
 */
