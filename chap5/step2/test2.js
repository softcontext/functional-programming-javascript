const R = require('ramda');

/*
  실제 값 value를 보관하는 객체를 컨테이너 또는 래퍼라고 부르겠다.
 */
class Wrapper {
  constructor(value){
    this._value = value;
  }
  map(f){
    // 래퍼가 갖고 있는 값은 map 함수를 통해서 얻어 갈 수 있다.
    // 갖고 있는 값을 그냥 달라고 할 때는 R.identity
    // 갖고 있는 값을 가공한 후 처리하고 싶을 때는
    // 가공 로직이 있는 함수를 map 함수에 전달한다.
    return f(this._value);
  }
  // fmap 함수에 연속적으로 접근하기 위해서는 Function Context가 Wrapper 객체이어야 하는데
  // wrapper.fmap(fn)의 결과가 다시 Wrapper 자료형의 객체를 리턴하면
  // 메소드 체이닝이 가능하다.
  fmap(f){
    // 함수자(functor) : 래퍼객체의 함수를 이용한 결과가 다시 (새로운)래퍼객체인 함수다.
    // 반환된 값을 래퍼 객체(컨테이너 역할)로 감싼(승급) 후 새 래퍼객체를 반환한다.
    // 전달 받은 함수 f 호출을 통해 값의 가공작업을 수행한 후,
    // 가공된 값을 다시 래퍼객체에 담아 리턴하는 방식이다.
    // 원래 값은 불변성으로 유지한다. 함수에서 값이 필요할 때는 인수로 전달한다.
    // 이렇게 조치하면 외부 참조를 통해 사용할 때 발생하는 오염현상을 막을 수 있다.
    return new Wrapper(f(this._value));
  }
  toString(){
    return `Wrapper # { _value: ${this._value} }`;
  }
}

const wrap = val => new Wrapper(val); // 새 래퍼객체를 생성하는 함수
const wrappedValue = wrap('Get Functional');

/*
  R.identity: 전달 받은 파라미터를 그대로 리턴한다.
  래퍼객체의 map 함수를 통해 래퍼객체가 보관하고 있는 값을 꺼낼 때 사용한다.
 */

console.log(wrappedValue.map(R.identity));
// Get Functional
console.log(wrappedValue.map(R.identity) instanceof Wrapper);
// false

console.log(wrappedValue.fmap(R.identity));
// Wrapper { _value: 'Get Functional' }
console.log(wrappedValue.fmap(R.identity) instanceof Wrapper);
// true

// 래퍼객체의 함수를 이용한 결과가 다시 래퍼자료형이면
// 메소드 체이닝이 가능하다.
console.log(wrappedValue.fmap(R.identity).map(R.identity));
// Get Functional
