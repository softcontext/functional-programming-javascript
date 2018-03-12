const R = require('ramda');
const _ = require('lodash');

function findStudent(ssn) {
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

function consoleLog(csvStr) {
  console.log(`LOG : ${csvStr}`);
}

/*
sequence(S 조합기)
  다수의 함수를 받는다. 동일한 값에 대해 각 함수를 차례로 실행하는 또 다른 함수를 반환한다.
  차례로 수행할 뿐 결과를 반환하지 않는다. 합성 중간에 끼워 넣고 싶으면 R.tap으로 감싸야 한다.
 */

const seq = function () {
  const funcs = Array.prototype.slice.call(arguments);
  return function (val) {
    funcs.forEach(function (fn) {
      fn(val);
    });
  };
};

const showStudent = R.compose(
  seq(append('#student-info'), consoleLog),
  csv,
  findStudent
);

showStudent('444-44-4444');
