const R = require('ramda');

class Wrapper {
  constructor(value){
    this._value = value;
  }
  map(f){
    // 값을 가공한다. 가공된 결과를 리턴한다.
    return f(this._value);
  }
  fmap(f){
    // 값을 가공한다. 메소드 체이닝이 가능하도록 새 래퍼객체로
    // 가공된 결과 값을 감싼 후 리턴한다.
    return new Wrapper(f(this._value));
  }
  toString(){
    return `Wrapper # { _value: ${this._value} }`;
  }
}

const wrap = val => new Wrapper(val);

/*
  5.3 모나드를 사용하여 함수형 기법에서 발생하는 에러를 처리한다.
 */

// 컨테이너로 감싸는 작업을 통해 값을 승급하고
// 어떤 규칙을 정해 통제한다는 생각으로 자료형을 생성하는 것이 모나드다.
// 처리로직 함수를 연속적으로 사용할 수 있어야 하므로 기본적으로 함수자로 값을 처리한다.
// 합성을 할 경우 부수효과가 발생하지 않으면서
// 데이터를 안전하게 흘리려면 모나드가 필요하다.
class Empty {
  // Empty 객체는 값을 보관하지 않는다.

  map(f){
    // 전달 받은 함수를 사용하지 않는다.
    return this;
  }
  fmap(f){
    // 전달 받은 함수를 사용하지 않는다.
    // 메소드 체이닝의 중간 값이 Empty 자료형의 객체라는 것은
    // 더 이상 수행할 의미가 없다는 것을 의미하므로
    // Empty 객체의 fmap 함수들이 연달아 호출되어
    // 조용히 아무것도 수행하지 않고 로직이 끝난다.
    return new Empty();
  }
  toString(){
    return 'Empty # {}';
  }
}

const empty = () => new Empty();

const isEven = n => Number.isFinite(n) && (n % 2 === 0);
// 처리 가능한 숫자이고 짝수인지 체크한다.

const half = val => isEven(val) ? wrap(val / 2) : empty();
// 짝수면 2로 나눈 결과를 래퍼객체로 감싼 후 리턴한다.
// 홀수면 null 대신 Empty 컨테이너 객체를 리턴한다.

console.log(half(4));
// Wrapper { _value: 2 }

console.log(half(3));
// Empty {}

console.log('--------------');

/*
Wrapper : 값을 보관하는 컨테이너
Empty : 값이 없음을 나타내는 컨테이너 (null 자료형이 존재해야 하는 이유와 비슷)
Monad : 함수 합성 작업에서, 정상과 비정상을 각각 Wrapper와 Empty로 대응하여
일관된 사용법과 결과를 보장하는 패턴이다.
 */

half(4).fmap(console.log);
// 2

half(3).fmap(console.log);
// 전달된 log 함수를 사용하지 않는다.
// return new Empty(); 로직으로 새 Empty객체가 리턴되지만
// 그 것을 받아서 처리하는 로직이 없으므로 조용히 묻힌다.
