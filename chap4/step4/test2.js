var _ = require('lodash');

function partial() {
  let boundArgs = Array.prototype.slice.call(arguments); // arguments 객체를 배열로 변경

  let fn = boundArgs[0]; // 인수의 첫 번째는 함수
  let placeholder = _; // 위치보유자로 로대쉬 객체 자신을 사용한다.

  let bound = function () {
    let position = 0;
    let length = boundArgs.length;
    let args = Array(length);

    for (let i = 0; i < length; i++) {
      // 위치보유자에 해당하면 나중에 받은 파라미터를 할당한다.
      // 아니면 앞서서 받은 파라미터를 할당한다.
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }

    while (position < arguments.length) { // 나중에 받은 파라미터들 중에 남은 것을 추가로 할당한다.
      args.push(arguments[position++]);
    }

    args.shift(); // 맨 앞 원소를 제거한다. 이는 fn 이다.

    return fn.apply(this, args);
  }

  return bound;
}

// String.prototype.first = _.partial(String.prototype.substring, 0, _); 코드와 동일
String.prototype.first = partial(String.prototype.substring, 0);

console.log('Functional Programming'.first(3));
// String.prototype.substring(0, 3) 코드와 동일

// String.prototype.asName = _.partial(String.prototype.replace, /(\w+)\s(\w+)/, '$2, $1');
String.prototype.asName = partial(String.prototype.replace, /(\w+)\s(\w+)/, '$2, $1');

console.log('Alonzo Church'.asName());
 // 'Alonzo Church'.replace(/(\w+)\s(\w+)/, '$2, $1') 코드와 동일
