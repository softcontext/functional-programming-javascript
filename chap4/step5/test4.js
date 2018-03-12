const _ = require('lodash');
const R = require('ramda');

const trim = str => {
  console.log('trim() called.');
  return str.replace(/^\s*|\s*$/g, '');
}
const normalize = str => {
  console.log('normalize() called.');
  return str.replace(/\-/g, '');
}
const validLength = (param, str) => {
  console.log('validLength() called.');
  return str.length === param;
}

const checkLengthSsn = _.partial(validLength, 9);

if (!Function.prototype.compose) {
  Function.prototype.compose = R.compose;
}

// XXX: 책에 코드가 잘 못 되어 있다. 다음처럼 수정이 필요하다.
// const cleanInput = R.compose(normalize, trim);
const cleanInput = Function.prototype.compose(normalize, trim);

// const isValidSsn = R.compose(checkLengthSsn, cleanInput);
const isValidSsn = Function.prototype.compose(checkLengthSsn, cleanInput)

console.log(cleanInput(' 444-44-4444 ')); // 444444444
console.log('---------------');
console.log(isValidSsn(' 444-44-4444 ')); // true
