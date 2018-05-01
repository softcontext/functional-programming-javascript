const R = require('ramda');
const _ = require('lodash');

const {Maybe} = require('../step4/test');
const {Either} = require('../step5/test');
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
  p193
 */


const showStudent = (ssn) => Maybe.fromNullable(ssn)
    .map(cleanInput)
    .chain(checkLengthSsn)
    .chain(findStudent)
    .map(R.props(['ssn', 'firstname', 'lastname']))
    .map(csv)
    .map(append('#student-info'));

showStudent('444-44-4444').orElse(console.log);
showStudent('333-33-3333').orElse(console.log);
