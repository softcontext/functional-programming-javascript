var {Tuple} = require('../step1/tuple');

const StringPair = Tuple(String, String);

/*
  커리의 처리 모습
 */
function curry(fn) {
  // 커리처리를 할 적용대상 함수를 파라미터로 받는다.
  // 반환된 함수는 나중에 사용할 인수를 포착하기 위해
  // fn 함수를 래핑한 코드다.
  return function (firstArg) {
    return function (secondArg) {
      return fn(firstArg, secondArg);
      // 커리처리가 된 fn 함수는 함수가 필요로 하는 인수들이
      // 모두 준비되었을 때 실행된다.
    };
  };
}

const name = curry((last, first) => new StringPair(last, first));

var [first, last] = name('Curry')('Haskell').values();

console.log(first, last);
// Curry Haskell
