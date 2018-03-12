var counter = 0;

function increment() {
  return ++counter; // 외부변수를 사용하므로 비순수 함수(impure function)다.

}

// 동일한 입력에 동일한 결과를 리턴하지 않으므로 참조 투명한 함수가 아니다.
console.log(increment()); // 1
console.log(increment()); // 2

//------------------------------

var oldTime = Date.now();
console.log(oldTime);

while (Date.now() <= oldTime + 2000) {

}

console.log(Date.now()); // 사용할 때마다 결과가 다르므로 비순수 함수다.
