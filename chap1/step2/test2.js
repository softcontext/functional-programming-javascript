var array = [0,1,2,3,4,5,6,7,8,9];

// 배열 요소의 데이터구조를 변경하여 새로운 배열에 담은 후
// 작업결과인 배열을 리턴하는 사상(mapping) 함수 map 함수는
// 데이터구조를 변경하는 로직을 cb 함수형태로 받아서 처리한다.
array = array.map(function (num) {
  return Math.pow(num, 2);
});

console.log(array);
