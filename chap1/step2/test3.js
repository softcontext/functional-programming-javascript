var array = [0,1,2,3,4,5,6,7,8,9];

// 애로우 함수의 가장 큰 도입효과는 this의 고정이지만
// 여기서는 cb 함수의 코드를 줄여쓰기 위해서 사용하고 있다.
array = array.map(num => Math.pow(num, 2)); // arrow function

console.log(array);
