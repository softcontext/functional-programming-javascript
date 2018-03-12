/*
  5.3.2 Maybe 와 Either 모나드로 에러를 처리

  자바스크립트는 자바의 인터페이스가 없다.
  앞서서 Wrapper, Empty 클래스 내의 메소드를 똑 같게 설정하는 것 만으로 충분하다.
  값을 구했다면 Wrapper 자료형의 객체를, 구하지 못했다면 Empty 자료형의 객체를 리턴해도
  다음 이용자 측에서 문제가 되지 않았다.

  그렇다고 자바의 추상클래스 같은 역할의 클래스를 두지 말라는 법도 없다.
  공통적인 기능은 Maybe 클래스에 정의하고
  값을 구했다면 Just 자료형의 객체를, 구하지 못했다면 Nothing 자료형의 객체를 리턴한다.

  Maybe, Either 모나드를 사용하여 null, undefined 를 모형화한다.
  - 불순 코드를 격리
  - null 체크 로직을 정리
  - 예외를 던지지 않음(무시)
  - 함수 합성을 지원
  - 기본값 제공 로직을 한 곳에 모음

  Maybe 모나드의 주 목적은 null 체크 로직을 효과적으로 통합하는 것이다.
 */

class Maybe {
  static just(a){ // 생성자의 역할을 수행한다.
    return new Just(a); // 값을 구했다면 Just 자료형의 객체를 리턴한다.
  }
  static nothing(){
    return new Nothing(); // 구하지 못했다면 Nothing 자료형의 객체를 리턴한다.
  }
  static fromNullable(a){
    // 값이 null 이면 Nothing 컨테이너를 값이 있으면 Just 컨테이너를 리턴한다.
    return a !== null ? Maybe.just(a) : Maybe.nothing();
  }
  static of(a){ // 값을 삽입한다.
    return Maybe.just(a);
  }
  get isNothing(){
    return false;
  }
  get isJust(){
    return false;
  }
}

class Just extends Maybe { // 값을 보관하는 컨테이너
  constructor(value){
    super();
    this._value = value;
  }
  get value(){
    return this._value;
  }
  map(f){
    // 함수 실행결과에 따라 Just 또는 Nothing 컨테이너에 담아 리턴한다.
    return Maybe.fromNullable(f(this._value));
  }
  getOrElse(){
    return this._value; // 값이 있다면 그대로 값을 리턴한다.
  }
  filter(f){
    Maybe.fromNullable(f(this._value) ? this._value : null);
  }
  chain(f){
    return f(this._value);
  }
  toString(){
    return `Maybe.Just(${this._value})`;
  }
}

// const j = new Just('값');
// console.log(j);

class Nothing extends Maybe { // 값이 없음을 나타내는 컨테이너
  map(f){
    return this;
  }
  get value(){
    throw new TypeError('Can not extract the value of a Nothing');
  }
  getOrElse(other){
    return other; // 값이 없는 경우에 해당하므로 입력 값을 그대로 리턴한다.
  }
  filter(f){
    return this._value;
  }
  chain(f){
    return this;
  }
  toString(){
    return 'Maybe.Nothing';
  }
}

// const n = new Nothing();
// console.log(n);
// console.log(Object.getOwnPropertyDescriptors(n.__proto__));

module.exports = {
  Maybe, Just, Nothing
}
