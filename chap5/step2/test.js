/*
  5.2 Functor(함자 또는 함수자로 번역함)
 */

const R = require('ramda');

class Wrapper {
  constructor(value){ // 값을 보관한다.
    this._value = value;
  }
  map(f){
    /*
      함수 f 를 호출하기 전에 null 체크를 여기서 수행하면
      함수 f 에서 null 체크를 할 필요가 없어진다.
     */
    return f(this._value);
    // 전달 받은 함수에 보관 중인 값을 전달하며 호출한다.
  }
  toString(){
    return `Wrapper # { ${this._value} }`;
  }
}

const wrap = val => new Wrapper(val); // 객체를 생성해주는 팩토리 함수
const wrappedValue = wrap('Get Functional');

console.log(wrappedValue.map(R.identity));
// 값에 직접 접근할 수 없으므로(값은 컨테이너 안에 존재함) 값을 얻으려면
// 함수를 map 함수의 인수로 전달한다.
// R.identity 함수는 인수로 받은 값을 그대로 리턴하는 단순한 함수다.
console.log(wrappedValue.map(v => v)); // 위 코드와 동일하다.
console.log();

wrappedValue.map(console.log);
// wrappedValue 래퍼객체가 가진 값을 인수로 받은 함수에 주고 실행하므로
// console.log 함수에 문자열을 파라미터로 주는 것과 같다.
wrappedValue.map(v => console.log(v));
// 함수를 하나 더 거쳐가는 것일 뿐 결과는 위와 동일하다.
console.log();

// null 체크를 R.toUpper 함수에서 수행하지 않도록 map 함수에서 처리하는 것이 좋다.
console.log(wrappedValue.map(R.toUpper));
console.log(wrappedValue.map(v => v.toLowerCase()));
