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

/*
모나드는 데이터의 관점에서 데이터의 흐름을 제어한다.
모나드로 테스트하기 좋은 가독성 좋은 코드를 얻을 수 있다.
합성과 모나드는 함수형 프로그래밍의 생태계를이루는 양대 개념이다.
 */
