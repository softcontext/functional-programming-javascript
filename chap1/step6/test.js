var sortDesc = arr => arr.sort((a, b) => b - a); // 내림차순 정렬

var arr = [1,3,5,4,2];

console.log(sortDesc(arr));

console.log(arr);
// 원본 참조 arr 변수가 가리키는 배열의 원소를 정렬하는 부수효과(Side-effect)를
// 일으킨다. 따라서, sort 함수는 순수하지 못하다.
