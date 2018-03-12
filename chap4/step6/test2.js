const R = require('ramda');

const students = ['Rosser', 'Turing', 'Kleene', 'Church'];
const grades = [80, 100, 90, 99];

/*
별칭을 사용하면 가독성이 향상될까? 커스텀 용어집을 만들면 좋은지 팀원들과 논의해 보자.
 */

const first = R.head;
const getName = R.pluck(0);
const reverse = R.reverse;
const sortByGrade = R.sortBy(R.prop(1));
const combine = R.zip;

const smartestStudent = R.compose(first, getName, reverse, sortByGrade, combine);

console.log(smartestStudent(students, grades)); // Turing
