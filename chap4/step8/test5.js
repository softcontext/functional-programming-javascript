const R = require('ramda');
const _ = require('lodash');

function getLetterGrade(score) {
  console.log('score =', score);
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

/*
fork, join
  조인 함수 1개와 분기 함수 2개를 받는다. 분기 함수들의 결과를 조인함수에 전달하고
  조인함수의 결과가 반환된다.
 */

const fork = function (join, func1, func2) {
  return function (val) {
    return join(func1(val), func2(val));
  };
};

/*
점수 배열을 받아 평균 점수를 구해보자.
 */

const computeAverageGrade = R.compose(getLetterGrade, fork(R.divide, R.sum, R.length));

console.log(computeAverageGrade([99, 80, 89]));
