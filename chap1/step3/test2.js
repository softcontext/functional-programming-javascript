var counter = 0;

// 순수 함수이면서 참조투명한 함수로 만들어 보자.
var increment = counter => counter + 1; // 파라미터 counter는 지역변수다.

// 동일한 입력에 동일한 결과를 리턴하면 참조 투명한 함수다.
console.log(increment(counter)); // 1
console.log(increment(counter)); // 1
