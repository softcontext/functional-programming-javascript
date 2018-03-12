console.log(some()); // 2

function some() {
  return 1;
}

console.log(some()); // 2

function some() {
  return 2;
}

console.log(some()); // 2

console.log(some); // [Function: some], 변수명과 함수명이 충돌하면 함수가 우선한다.

var some = function () { // 다른 함수를 할당
  return 3;
}

console.log(some()); // 3
