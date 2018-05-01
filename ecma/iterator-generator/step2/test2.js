function *parallel() {
  var a = yield 10;
  var b = yield a + 1;
  var c = yield b + 2;
  yield c + 3;
}

var gener = parallel(); // 제너레이터 함수 호출 시 파라미터를 전달할 수 있다.

console.log('1 >>', gener.next()); // 첫 next() 함수 호출에서는 파라미터를 전달하지 못한다.
console.log('2 >>', gener.next(100));
console.log('3 >>', gener.next(200));
console.log('4 >>', gener.next(300));
console.log('5 >>', gener.next());
console.log('6 >>', gener.next().done);
