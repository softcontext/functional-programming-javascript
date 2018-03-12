const R = require('ramda');

class Wrapper {
  constructor(value){
    this._value = value;
  }
  map(f){
    // 래퍼가 갖고 있는 값은 map 함수를 통해서만 얻어 갈 수 있다.
    // 갖고 있는 값을 그냥 달라고 할 때는 R.identity
    // 갖고 있는 값을 가공한 후 달라고 할 때는 해당 가공 로직이 있는 함수를 map 함수에 전달한다.
    return f(this._value);
  }
  // fmap 함수에 접근할 수 있다는 것은 함수 호출 컨텍스트가 Wrapper 객체일 때 뿐이다.
  // wrapper.fmap(fn) 의 결과가 다시 Wrapper 자료형의 객체를 리턴하면 메소드 체이닝이 가능하다.
  fmap(f){
    // 함수자(functor) : 함자, 래퍼객체의 함수를 이용한 결과가 다시 (새로운)래퍼객체다.
    // 반환된 값을 래퍼 객체(컨테이너 역할)로 감싼다음(승급) 반환한다.
    // 전달 받은 함수 f 호출을 통해 값의 가공을 수행한 후,
    // 새로운 값을 다시 래퍼객체에 담아 리턴한다.
    // 값은 불변성으로 유지하고 필요할 때 인수로 새롭게 전달해야 외부 참조를 통해 오염되지 않는다.
    return new Wrapper(f(this._value));
  }
  toString(){
    return `Wrapper (${this._value})`;
  }
}

const wrap = val => new Wrapper(val);

const wrappedValue = wrap('Get Functional');
console.log(wrappedValue.map(R.identity));
 // Wrapper 객체의 함수를 이용한 결과가 다시 Wrapper형이다.
console.log(wrappedValue.fmap(R.identity));
 // 메소드 체이닝이 가능하다.
console.log(wrappedValue.fmap(R.identity).map(R.identity));
