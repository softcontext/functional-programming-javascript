/*
  5.2 Functor
 */

const R = require('ramda');

class Wrapper {
  constructor(value){
    this._value = value;
  }
  // 동일 입력을 동일 결과에 매핑한다.
  map(f){
    // 함수를 호출하기 전에 null, 빈 문자열, 음수 등을 여기서 체크한다.
    return f(this._value); // 값을 컨테이너에 담는다.
  }
  toString(){
    return `Wrapper (${this._value})`;
  }
}

const wrap = val => new Wrapper(val);

const wrappedValue = wrap('Get Functional');
console.log(wrappedValue.map(R.identity)); // I-Combinator
console.log(wrappedValue.map(v => v));

console.log();

wrappedValue.map(console.log); // wrappedValue 래퍼객체가 가진 값을 인수로 받은 함수에 주고 실행한다.
wrappedValue.map(v => console.log(v));

console.log();

// null 체크는 R.toUpper 함수가 처리해야 한다. 더 좋은 방안은?
console.log(wrappedValue.map(R.toUpper));
console.log(wrappedValue.map(v => v.toUpperCase()));
