var sortDesc = arr => arr.sort((a, b) => b - a); // 내림차순 정렬

var arr = [1,3,5,4,2];

console.log(sortDesc(arr));

console.log(arr);
// 원본 참조가 가리키는 배열의 원소를 정렬하는 부수효과를 일으킨다.
// 따라서, 순수하지 못하다.
