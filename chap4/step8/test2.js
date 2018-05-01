const _ = require('lodash');

const trim = str => str.replace(/^\s*|\s*$/g, '');
const normalize = str => str.replace(/\-/g, '');
const validLength = (param, str) => str.length === param;

const checkLengthSsn = _.partial(validLength, 9); // 문자열의 길이는 9여야 한다.

console.log(checkLengthSsn('111221111'));
