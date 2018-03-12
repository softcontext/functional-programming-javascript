function *parallel() {
  var a = yield 10;
  var b = yield a + 1;
  var c = yield b + 2;
  yield c + 3;
}

var gener = parallel();

console.log(gener.next());
console.log(gener.next(100));
console.log(gener.next(200));
console.log(gener.next(300));
console.log(gener.next());
console.log(gener.next().done);
