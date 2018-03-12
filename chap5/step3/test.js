const R = require('ramda');

class Wrapper {
  constructor(value){
    this._value = value;
  }
  map(f){
    return f(this._value);
  }
  fmap(f){
    return new Wrapper(f(this._value));
  }
  toString(){
    return `Wrapper (${this._value})`;
  }
}

const wrap = val => new Wrapper(val);

/*
  5.3 모나드를 사용하여 함수형 기법의 에러를 처리한다.
 */

// 컨테이너 안으로 값을 승급하고 어떤 규칙을 정해 통제한다는 생각으로 자료형을
// 생성하는 것이 모나드다. 함수자로 값을 보관하되, 합성을 할 경우 데이터를
// 안전하고 부수효과 없이 흘리려면 모나드가 필요하다.
class Empty {
  map(f){ // Empty 객체는 값을 보관하지 않는다.
    return this;
  }
  fmap(_){
    // 함수를 인수로 받기는 하지만 아무것도 수행하지 않는다.
    // 메소드 체이닝 중간 값이 Empty 자료형의 객체라는 것은
    // 더 이상 수행할 의미가 없다는 것을 의미하므로 empty 객체의 fmap 함수들이
    // 연달아 호출되어 조용히 아무것도 수행하지 않고 로직이 끝난다.
    return new Empty();
  }
  toString(){
    return 'Empty ()';
  }
}

const empty = () => new Empty();

const isEven = n => Number.isFinite(n) && (n % 2 === 0);
const half = val => isEven(val) ? wrap(val / 2) : empty();
// 홀수가 넘어오면 null 대신 Empty 컨테이너를 반환한다.

console.log(half(4)); // Wrapper { _value: 2 }

console.log(half(3)); // Empty {}

console.log();

/*
Wrapper : 값을 보관하는 컨테이너
Monad : 값이 없음을 나타내는 컨테이너 (null 자료형이 존재해야 하는 이유와 비슷)
 */

half(4).fmap(console.log); // 2
half(3).fmap(console.log); // nothing have done.
