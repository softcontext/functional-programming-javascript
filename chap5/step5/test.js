/*
  Either 모나드
  Maybe 모나드는 값을 구하지 못하면 아무것도 전달하지 않는다(Nothing).
  실패한 원인까지 전달하려면 Either 모나드를 사용한다.

  Either는 절대로 동시에 발생하지 않는 두 값 a, b를 논리적으로 구분한 자료구조로써
  다음 두 경우를 모형화한다.
  - Left(a) : 에러 메시지 또는 예외 객체를 담는다.
  - Right(b) : 성공한 값을 담는다.
 */

class Either {
  constructor(value){ // 왼쪽(예외), 오른쪽(정상 값) 정보를 취급한다.
    this._value = value;
  }
  get value(){
    return this._value;
  }
  static left(a){
    return new Left(a);
  }
  static right(b){
    return new Right(b);
  }
  static fromNullable(value){
    return value !== null && value !== undefined ? Either.right(value) : Either.left(value);
  }
  static of(b){
    return Either.right(b);
  }
}

class Left extends Either{
  map(_){ // 쓰지 않음
    return this;
  }
  get value(){
    throw new TypeError('Left(a) 값을 가져올 수 없습니다.');
  }
  getOrElse(other){
    return other;
  }
  orElse(f){
    return f(this._value);
  }
  chain(f){
    return this;
  }
  getOrElseThrow(a){
    throw new Error(a);
  }
  filter(f){
    return this;
  }
  toString(){
    return `Either.Left(${this._value})`;
  }
}

class Right extends Either{
  map(f){
    return Either.of(f(this._value));
  }
  // get value(){
  //   throw new TypeError('Left(a) 값을 가져올 수 없습니다.');
  // }
  getOrElse(other){
    return this._value;
  }
  orElse(){ // 쓰지 않음
    return this;
  }
  chain(f){
    return f(this._value);
  }
  getOrElseThrow(_){
    return this._value;
  }
  filter(f){
    return Either.fromNullable(f(this._value) ? this._value : null);
  }
  toString(){
    return `Either.Right(${this._value})`;
  }
}

module.exports = {
  Either,
  Left,
  Right
}
