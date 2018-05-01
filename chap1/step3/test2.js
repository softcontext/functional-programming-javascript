var counter = 0;

// 순수 함수이면서 참조투명한 함수를 만들어 보자.
var increment = counter => counter + 1;
// 파라미터 counter는 지역변수다.
// 순수 함수는 외부자원에 의존하면 안 된다.
// 따라서, 순수함수에서 외부자원을 사용해야 하는 경우,
// 외부자원을 파라미터로 받아서 해당 자원을 지역화한 후
// 사용해야 한다.

// 동일한 입력에 동일한 결과를 리턴하면 참조 투명한 함수다.
console.log(increment(counter)); // 1
console.log(increment(counter)); // 1
