// 언더스코어 유틸리티 라이브러리를 계승 발전시킨 로대쉬 라이브러리를 사용한다.
var _ = require('lodash');

let enrollment = [
  {enrolled:2, grade:100},
  {enrolled:2, grade:80},
  {enrolled:1, grade:89},
];

/*
  Lodash 3 버전 코드다.
 */
// var average = _.chain(enrollment).filter(studnet => student.enrolled > 1)
//   .pluck('grade').average().value();

/*
  Lodash 4 버전 코드다.
  사용하는 로대쉬 버전의 따라 코드가 달라진다.
 */
var average = _.chain(enrollment)
  .filter(student => student.enrolled > 1)
  .map('grade')
  .meanBy()
  .value();
// chain: 배열 데이터를 처리하는 흐름을 만든다.
// filter: 조건에 부합하는 데이터만 남기는 필터링 작업을 적용한다.
// map: 원본 데이터를 필요한 데이터로 변경하는 작업을 수행한다.
// meanBy: 값의 평균을 구한다.
// value: 값을 사용하기 위해서 값을 달라고 요청한다.

/**
 * 결론:
 * for문으로 결과를 구하는 test.js 파일의 코드보다
 * 메소드 체이닝 기법으로 결과를 구하는 현 파일의 코드가
 * 가독성 측면과 로직의 재활용성 측면에서 비교할 수 없을 정도로 탁월하다.
 */

console.log(average); // 90
console.log();

console.log(_.chain(enrollment)); // LodashWrapper

console.log(_.chain(enrollment)
  .filter(student => student.enrolled > 1)); // LodashWrapper.LazyWrapper

console.log(_.chain(enrollment)
  .filter(student => student.enrolled > 1)
  .value()); // [ { enrolled: 2, grade: 100 }, { enrolled: 2, grade: 80 } ]

console.log(_.chain(enrollment)
  .filter(student => student.enrolled > 1)
  .map('grade').value()); // [ 100, 80 ]

console.log(_.chain(enrollment)
  .filter(student => student.enrolled > 1)
  .map('grade')
  .meanBy().value()); // 90
