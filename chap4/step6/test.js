const R = require('ramda');

const students = ['Rosser', 'Turing', 'Kleene', 'Church'];
const grades = [80, 100, 90, 99];

/*
학생배열과 성적배열을 사용하여 최고 점수의 학생을 찾고자 한다.
 */

// 배열의 인덱스를 기준으로 짝지어 2차원 배열을 만든다.
console.log(R.zip(students, grades));
// [ [ 'Rosser', 80 ],
//   [ 'Turing', 100 ],
//   [ 'Kleene', 90 ],
//   [ 'Church', 99 ] ]

console.log();

// R.prop(1): 인덱스 1에 해당하는 요소를 기준으로 오름차순 정렬한다.
console.log(R.compose(R.sortBy(R.prop(1)), R.zip)(students, grades));
// [ [ 'Rosser', 80 ],
//   [ 'Kleene', 90 ],
//   [ 'Church', 99 ],
//   [ 'Turing', 100 ] ]

console.log();

// R.reverse: 배열의 정렬을 뒤집는다.
console.log(R.compose(R.reverse, R.sortBy(R.prop(1)), R.zip)(students, grades));
// [ [ 'Turing', 100 ],
//   [ 'Church', 99 ],
//   [ 'Kleene', 90 ],
//   [ 'Rosser', 80 ] ]

console.log();

// R.pluck(0): 인덱스 0에 해당하는 요소를 뽑아서 새로운 배열을 만든다.
console.log(R.compose(R.pluck(0), R.reverse, R.sortBy(R.prop(1)), R.zip)(students, grades));
// [ 'Turing', 'Church', 'Kleene', 'Rosser' ]

console.log();

// R.head: 맨 왼쪽 요소를 리턴한다.
const smartestStudent = R.compose(R.head, R.pluck(0), R.reverse, R.sortBy(R.prop(1)), R.zip);

console.log(smartestStudent(students, grades)); // Turing
