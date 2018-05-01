/*
  p174
  모나드형은 다음 인터페이스를 준수해야 한다.
  1. type constructor: 모나드 자료형의 객체를 생성하는 생성자를 제공한다.
  2. unit function: 값을 삽입하는 간단한 함수를 제공한다.
    wrap(값) 또는 empty(값) 함수 호출로 모나드 생성자가 호출되어
    새 객체가 만들어지고 값이 보관 된다.
  3. bind function: 메소드체이닝 기법을 지원한다.
  4. join operation: 자료구조의 계층을 평탄화하는 방법을 제공한다.
 */

const R = require('ramda');

/*
 모나드형이 지켜야 할 인터페이스 정의에 따라 업그레이드 한다.
 */
class Wrapper {
  constructor(value){ // 1. 생성자를 제공한다.
    this._value = value;
  }
  static of(a){ // 2. 값을 모나드에 삽입한다.
    return new Wrapper(a);
  }
  map(f){ // 3. 연산을 체이닝할 수 있다. 이전 예제의 famp 함수에 해당한다.
    return Wrapper.of(f(this._value));
  }
  join(){ // 4. 모나드 자료구조의 계층을 평탄화한다.
    if (!(this._value instanceof Wrapper)) {
      return this;
      // 값이 아니라 값을 가진 래퍼객체를 리턴하고 있다.
    }
    return this._value.join();
  }
  get(){
    return this._value;
  }
  toString(){
    return `Wrapper # { _value: ${this._value} }`;
  }
}

console.log(Wrapper.of('Hello Monads!'));
// Wrapper { _value: 'Hello Monads!' }

console.log(Wrapper.of('Hello Monads!').get());
// Hello Monads!

console.log('-------------');

Wrapper.of('Hello Monads!') // 새 래퍼 객체를 만들고 값을 보관한다.
  .map(R.toUpper).map(str => { // 값을 대문자로 바꾸는 함수를 실행하고 출력한다.
    console.log(str); // console.log 함수는 리턴이 없다.
    // HELLO MONADS!
    return str; // 값은 연속적으로 전달되어야 한다.
  })
  .map(str => str.toLowerCase())
  .map(console.log);
  // hello monads!

console.log('-------------');

console.log(Wrapper.of('Hello Monads!').map(R.toUpper).map(R.identity).get());
// HELLO MONADS!
