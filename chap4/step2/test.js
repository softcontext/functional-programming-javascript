var {Tuple} = require('../step1/tuple');

const StringPair = Tuple(String, String);

function curry2(fn) { // 첫 함수 호출 시 cb 함수를 받는다.
  // 반환된 함수는 나중에 사용할 인수를 포착하기 위해 함수 래퍼를 중첩한 코드다.
  return function (firstArg) {
    return function (secondArg) {
      return fn(firstArg, secondArg); // cb 함수가 필요로 하는 인수들이 준비되었을 때 기동시킨다.
    };
  };
}

const name = curry2((last, first) => new StringPair(last, first));

var [first, last] = name('Curry')('Haskell').values();

console.log(first, last);
