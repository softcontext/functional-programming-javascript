/*
  5.2.2
 */

const R = require('ramda');

class Wrapper {
  constructor(value){
    this._value = value;
  }
  map(f){
    return f(this._value);
  }
  fmap(f){
    // 함수자(functor)
    // 반환된 값을 래퍼 객체(컨테이너 역할)로 감싼다음(승급) 반환한다.
    return new Wrapper(f(this._value));
  }
  toString(){
    return `Wrapper (${this._value})`;
  }
}

const wrap = val => new Wrapper(val);

const plus = R.curry((a, b) => a + b); // 커리 로직의 함수를 만든다.
const plus3 = plus(3); // a 값이 3으로 고정된 부분고정 함수를 얻는다.

const two = wrap(2); // 2를 보관하는 래퍼 객체를 만든다.

const five = two.fmap(plus3); // two, five 모두 Wrapper 자료형의 객체다.
// 2를 갖고 있는 two 래퍼 객체에 plus3 부분처리 함수를 건네 준다.
// 받은 plus3 함수에 래퍼 객체가 갖고 있는 2 값을 주고 실행한다.
// 샐행 결과인 5 값을 새 래퍼 객체로 감싼다음 반환한다.

console.log(five.map(R.identity)); // five 래퍼 객체가 갖고 있는 값을 구한다.

const plus10 = plus(10);

console.log(two.fmap(plus3).fmap(plus10)); // Wrapper { _value: 15 }
// 값을 보관하는 래퍼객체를 중심으로 메소드체이닝 기법을 사용하고 있다.
// 값을 가공하는 로직은 함수에 담아 fmap 함수의 인수로 전달한다.

two.fmap(plus10).fmap(plus3).fmap(console.log); // 15

console.log();

/*
함수자의 조건
1. 부수효과가 없다.
2. 합성이 가능하다.
 */

wrap('Get Functional').fmap(R.identity).fmap(console.log);

var result = wrap(2)
  .fmap(R.compose(
      plus(3),
      R.tap(console.log))) // 2
  .map(R.identity);

console.log(result); // 5

/*
결국,
함수자로는 예외를 던지거나, 일관되지 못하는 결과를 반환하지 못 한다.
함수자는 원본 값을 변형하지 못 한다. 새로운 값은 새로운 래퍼에 담아야 한다.

에러 처리를 위해서, 모나드가 필요하다.
모나드는 함수자가 건드리는 컨테이너다.
 */
