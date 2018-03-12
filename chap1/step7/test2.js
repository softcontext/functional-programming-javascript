var _ = require('lodash');

let enrollment = [
  {enrolled:2, grade:100},
  {enrolled:2, grade:80},
  {enrolled:1, grade:89},
];

/*
  Lodash 3
 */
// var average = _.chain(enrollment).filter(studnet => student.enrolled > 1)
//   .pluck('grade').average().value();

/*
  Lodash 4
 */
var average = _.chain(enrollment).filter(student => student.enrolled > 1)
  .map('grade').meanBy().value();

console.log(average); // 90

console.log();

console.log(_.chain(enrollment).filter(student => student.enrolled > 1).value());
console.log(_.chain(enrollment).filter(student => student.enrolled > 1).map('grade').value());
