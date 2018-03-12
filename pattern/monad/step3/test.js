const {Just, Nothing} = require('../step1/api');

/*
Do 표기법

Haskell은 모나드화 된 코드를 작업하는데 도움을 주기 위해
편리 문법(syntax sugar)인 do 표기법을 제공하고 있다.

do 키워드와 함께 시작된 구획은 bind 함수를 호출하는 것으로 번역이 된다.

ES6 generator는 do 표기법을 JavaScript에서 간단하고 동기적으로 보이는 코드로 작성할 수 있게 만든다.

전 예제에서는 maybe 모나드가 다음과 같이 직접 bind를 호출했었다.
 */

var result1 = new Just(5).bind(value =>
  new Just(6).bind(value2 =>
    new Just(value + value2)));

console.log(result1);

/*
다음은 같은 코드지만 generator를 활용했다. 각각의 호출은 yield로 모나드에서 값을 받는다.
 */

function doM(gen) {
  function step(value) {
    var result = gen.next(value);
    if (result.done) {
      return result.value;
    }
    return result.value.bind(step);
  }
  return step();
}

var result2 = doM(function* () {
  var value = yield new Just(5);
  var value2 = yield new Just(6);
  return new Just(value + value2);
}());

console.log(result2);

/*
이 방식은 다른 Continuation 모나드와 같은 다른 모나드에서도 사용할 수 있다.
다른 모나드와 같은 방식으로 동작하도록 then을 bind로 별칭을 붙였다.
 */

Promise.prototype.bind = Promise.prototype.then;

var result3 = doM(function* () {
  var value = yield Promise.resolve(5);
  var value2 = yield Promise.resolve(11);
  return value + value2;
}());

console.log(result3);
result3.then((result) => console.log(result));
