/*
Continuation 모나드는 비동기 일감에서 사용한다.
ES6에서는 다행히 직접 구현할 필요가 없다. Promise 객체가 이 모나드의 구현이기 때문이다.

    Promise.resolve(value)
    값을 감싸고 pormise를 반환. (unit 함수의 역할)
    Promise.prototype.then(onFullfill: value => Promise)
    함수를 인자로 받아 값을 다른 promise로 전달하고 promise를 반환. (bind 함수의 역할)

다음 코드에서는 Unit 함수로 Promise.resolve(value)를 활용했고,
Bind 함수로 Promise.prototype.then을 활용했다.
 */

var result = Promise.resolve(5)
  .then(function(value) {
    return Promise.resolve(6)
      .then(function(value2) {
        return value + value2;
      });
  });

result.then(function(value) {
  console.log(value);
});

/*
Promise는 기본적인 continuation 모나드에 여러가지 확장을 제공한다.
만약 then이 promise 객체가 아닌 간단한 값을 반환하면
이 값을 Promise 처리가 완료된 값과 같이 감싸 모나드 내에서 사용할 수 있다.

두번째 차이점은 에러 전파에 대해 거짓말을 한다는 점이다.
Continuation 모나드는 연산 사이에서 하나의 값만 전달할 수 있다.
반면 Promise는 구별되는 두 값을 전달하는데 하나는 성공 값이고 다른 하나는 에러를 위해 사용한다.
(Either 모나드와 유사하다.)
에러는 then 메소드의 두번째 콜백으로 포착할 수 있으며
또는 이를 위해 제공되는 특별한 메소드 .catch를 사용할 수 있다.
 */
