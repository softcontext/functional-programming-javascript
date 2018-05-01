var sort = (arr, direction) => {
  arr = arr.slice(); // 배열을 복제한 후 사용한다.

  var flag = 1;
  if (direction && typeof direction === 'string' &&
    direction.toUpperCase() === 'DESC') {
    flag = -1;
  }

  return arr.sort((a, b) => (a - b) * flag);
  // flag 값을 변경하는 것으로 오름차순/내림차순 정렬을 적용한다.
};

var arr = [1,3,5,4,2];

console.log(sort(arr));

console.log(arr); // 원본 참조 arr 변수가 가리키는 배열은 그대로 유지된다.

console.log(sort(arr, 'desc'));

console.log(arr);
