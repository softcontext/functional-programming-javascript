var counter = 0;

function increment() {
  return ++counter;
  // 외부변수를 사용하므로 비순수 함수(impure function)다.
  // 외부변수는 다른 외부작용에 의해서 언제든지 변경될 수 있는 상태의 자원이다.
  // 따라서, 외부자원을 사용하는 함수는 작업결과의 일관성을 보장할 수 없다.
}

// 동일한 입력에 동일한 결과를 리턴하지 않으므로 참조 투명한 함수가 아니다.
// 이는 데이터베이스의 참조무결성 개념과 일맥상통한다.
// PK가 10인 데이터를 SQL로 조회할 때 동일한 결과를 보장받지 못한다면
// 데이터를 사용하는 측은 신뢰를 갖기 어렵다. 참조무결성은 데이터를 믿고
// 사용하기 위해서 최우선적으로 지원해야 할 사항이다.
// 마찬가지로 어떤 로직(함수)을 믿고 사용하기 위해서는 해당 함수는
// 참조 투명한 함수여야 한다.
console.log(increment()); // 1
console.log(increment()); // 2

//------------------------------

var oldTime = Date.now();
console.log(oldTime);

while (Date.now() <= oldTime + 2000) {

}

console.log(Date.now()); 
// 사용할 때마다 결과가 다르므로 참조 투명한 함수가 아니다.
// 시간정보를 구하기 위해서 외부자원인 OS의 힘을 빌려야 하므로 비순수 함수다.
