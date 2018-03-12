// 호이스팅의 결과 모습: 묵시적인 글로벌 스코프 내 선언부 코드가 맨 위로 이동한다.

function some() {
  return 1;
}

function some() {
  return 2;
}

var some;

console.log(some()); // 2

console.log(some()); // 2

console.log(some()); // 2

console.log(some); // [Function: some], 변수명과 함수명이 충돌하면 함수가 우선한다.

some = function () { // 다른 함수를 할당, 함수 표현식에서 할당부는 호이스팅 대상이 아니다.
  return 3;
}

console.log(some()); // 3
