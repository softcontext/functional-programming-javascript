/**
 * 복수과목을 수강한(student.enrolled > 1) 학생들의 평균점수를 구한다.
 */
let enrollment = [
  {enrolled:2, grade:100},
  {enrolled:2, grade:80},
  {enrolled:1, grade:89},
];

var totalGrades = 0;
var totalStudentsFound = 0;

for (var i = 0; i < enrollment.length; i++) {
  let student = enrollment[i];
  if (student !== null && student.enrolled > 1) {
    totalGrades += student.grade;
    totalStudentsFound++;
  }
}

var average = totalGrades / totalStudentsFound;
console.log(average); // 90
