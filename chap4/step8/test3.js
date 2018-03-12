/*
  alternation(OR 조합기)
    함수 2개를 받아, 첫 함수의 결과가 의미가 없다면 두 번째 함수를 실행하여 결과를 반환한다.
 */

const R = require('ramda');
const _ = require('lodash');

function findStudent(ssn) {
  console.log(`${ssn} 에 해당하는 학생정보는 존재하지 않는다.`);
  return null;
}

function createNewStudent(ssn) {
  console.log(`${ssn} 에 해당하는 학생정보를 새로 만든 후 정보를 객체로 리턴한다.`);
  return {
    ssn,
    name: 'Tom'
  };
}

function csv(obj) {
  return Object.keys(obj).reduce((str, key) => str += (obj[key] + ','), '');
}

const append = R.curry((elementId, csvStr) => {
  console.log(`id 가 ${elementId} 인 엘리먼트에 ${csvStr} 정보를 표시한다.`)
});

// const alt = function (func1, func2) {
//   return function (val) {
//     return func1(val) || func2(val);
//   };
// }

const alt = R.curry((func1, func2, val) => func1(val) || func2(val));

const showStudent = R.compose(
  append('#student-info'),
  csv,
  alt(findStudent, createNewStudent));

showStudent('444-44-4444');
