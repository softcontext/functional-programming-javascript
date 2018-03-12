/*
연결된 호출 Chained calls

다른 방식으로 모나드화 된 코드를 쉽게 만드는 방법은 Proxy를 활용하는 것이다.

다음 함수는 모나드 인스턴스를 감싸 proxy 객체를 반환한다.
이 객체는 값이 있는지 없는지 확인되지 않은 프로퍼티라도 안전하게 접근할 수 있게 만들고
모나드 내에 있는 값을 함수에서 활용할 수 있게 돕는다.
 */

function wrap(target, unit) {
  target = unit(target);

  function fix(object, property) {
    var value = object[property];
    if (typeof value === 'function') {
      return value.bind(object);
    }
    return value;
  }

  function continueWith(transform) {
    return wrap(target.bind(transform), unit);
  }

  return new Proxy(function() {}, {
    get: function(_, property) {
      if (property in target) {
        return fix(target, property);
      }
      return continueWith(value => fix(value, property));
    },
    apply: function(_, thisArg, args) {
      return continueWith(value => value.apply(thisArg, args));
    }
  });
}
