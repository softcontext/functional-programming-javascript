var array = [1, 2, 3];
var obj = {
  '0':10,
  '1':20,
  '3':30
};

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
console.log(add.apply(null, array));
console.log(add.apply(null, obj)); // NaN, 객체는 파라미터로 쓸 수 없다.

console.log();

function echo(val) {
  return val;
}

console.log(echo(1, 2));
console.log(echo.apply(null, array));
console.log(echo.apply(null, obj)); // undefined, 객체는 파라미터로 쓸 수 없다.

console.log();

function fake(func) {
  return function () {
    return func.apply(null, arguments) + 10; // arguments 객체는 의미가 있지만
  };
}

const echo2 = fake(echo);

console.log(echo2(1, 2));
console.log(echo2.apply(null, array));
console.log(echo2.apply(null, obj)); // obj 객체는 처리가 안되니 의미가 없다.
