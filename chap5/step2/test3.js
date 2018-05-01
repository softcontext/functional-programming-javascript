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
    // 함자 또는 함수자(functor)
    // 반환된 값을 래퍼 객체(컨테이너 역할)로 감싼다음(승급) 반환한다.
    return new Wrapper(f(this._value));
  }
  toString(){
    return `Wrapper # { ${this._value} }`;
  }
}

const wrap = val => new Wrapper(val);

const plus = R.curry((a, b) => a + b); // 커링된 함수를 얻는다.
const plus3 = plus(3); // a 값이 3으로 고정된 함수를 얻는다.

const two = wrap(2); // 2를 보관하는 래퍼 객체를 만든다.
const five = two.fmap(plus3); // two, five 모두 Wrapper 자료형의 객체다.
// 2를 갖고 있는 two 래퍼 객체에 plus3라는 부분처리 함수를 전달 한다.
// fmap 함수 내에서 파라미터로 받은 plus3 함수에
// 래퍼 객체가 갖고 있는 2 값을 전달하고 plus3 함수를 실행한다.
// 샐행 결과인 5 값을 새 래퍼 객체로 감싼(승급)다음 최종결과로 반환한다.

console.log(five.map(R.identity)); // five 래퍼 객체가 갖고 있는 값을 구한다.
// 5

const plus10 = plus(10);

console.log(two.fmap(plus3).fmap(plus10));
// Wrapper { _value: 15 }
// 값을 보관하는 래퍼객체를 중심으로 메소드체이닝 기법을 사용한다.
// 값을 가공하는 함수를 fmap 함수의 파라미터로 전달하여 처리한다.

let what = two.fmap(plus10).fmap(plus3).fmap(console.log);
// 15
console.log(what);
// Wrapper { _value: undefined }
// 화면에 출력하는 것으로 전체 로직을 마무리할 때,
// 굳이 what 변수로 값을 받을 필요가 없다.
console.log('--------------');

/*
함수자의 조건
1. 부수효과가 없다.
2. 합성이 가능하다.
 */

wrap('Get Functional Programming').fmap(R.identity).fmap(console.log);
// Get Functional Programming

var result = wrap(2)
  .fmap(R.compose(plus(3), R.tap(console.log))) // 2
  .map(R.identity);

console.log(result); // 5

/*
함수자는 원본 값을 변형하면 안된다.
따라서, 새로운 값은 새로운 래퍼에 담아서 처리한다.

함수자로는 예외를 던지거나, 일관되지 못한 결과를 반환하지는 못 한다.
따라서, 에러 처리를 위해서 모나드가 필요하다.
래퍼는 값의 처리를 체이닝하기 위한 컨테이너이고
모나드는 함수자가 건드리는 컨테이너다.
에러 처리를 목적으로 하는 모나드는 안전하게 에러를 전파하여
장애 허용 애플리케이션을 만드는 데 강력한 힘을 발휘한다.
 */
