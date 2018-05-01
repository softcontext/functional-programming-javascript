/*
  Private property in JavaScript ES6 class
 */
let Car = (function() {
  // 함수 스코프 내의 지역변수는 private 접근제어의 특성을 가진다.
  let maker = Symbol(); // 심볼을 이용한 private 구현

  class Car {
    constructor(color = 'Black') {
      this[maker] = 'Kia';
      this.color = color;
    }
    get maker() {
      return this[maker];
    }
  }

  return Car;
})();

var car = new Car();

console.log(car); // { color: 'Black', [Symbol()]: 'Kia' }
// 심볼이 보인다. 그러나, 심볼의 키는 private 이다.
console.log(car[Symbol()]); // undefined
// 심볼값은 자동으로 생성되고 중복되지 않으므로 이 방식으로 값을 구할 수 없다.

console.log(car.color); // Black
console.log(car.maker); // getter로 가져간다.

console.log(Object.getOwnPropertyNames(car)); // #1. 심볼이 안 보인다.
// [ 'color' ]
console.log(Object.getOwnPropertyDescriptors(car)); // 심볼이 보인다.
// { color:
//    { value: 'Black',
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   [Symbol()]:
//    { value: 'Kia',
//      writable: true,
//      enumerable: true,
//      configurable: true } }
console.log(Object.getOwnPropertySymbols(car)); // 심볼만 보인다.
// [ Symbol() ]

for (var prop in car) { // #2. 심볼은 처리대상에서 제외된다.
  if (car.hasOwnProperty(prop)) {
    console.log(prop, '=', car[prop]);
  }
}
