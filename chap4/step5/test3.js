const _ = require('lodash');
const R = require('ramda');

const trim = str => str.replace(/^\s*|\s*$/g, ''); // 문자열 앞뒤 공백을 제거한다.
const normalize = str => str.replace(/\-/g, ''); // - 문자를 제거한다.
const validLength = (param, str) => str.length === param; // 문자열의 길이가 일치하는지 확인한다.

const checkLengthSsn = _.partial(validLength, 9); // 문자열의 길이는 9여야 한다.
const cleanInput = R.compose(normalize, trim); // 문자열을 사용하기 쉽도록 정제한다.
const isValidSsn = R.compose(checkLengthSsn, cleanInput); // 입력값을 정제하고 길이를 체크한다.

console.log(cleanInput(' 444-44-4444 ')); // 444444444
console.log(isValidSsn(' 444-44-4444 ')); // true

/*
단순한 함수들을 조립해서 전체 프로그램을 구축해 나가는 모습이다.
 */
