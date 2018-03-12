const R = require('ramda');

// 모나드형이 지켜야 할 인터페이스에 따라 업그레이드 했다.
class Wrapper {
  constructor(value){
    this._value = value;
  }
  static of(a){ // 값을 모나드에 삽입한다.
    return new Wrapper(a);
  }
  map(f){ // 연산을 체이닝한다.
    return Wrapper.of(f(this._value));
  }
  join(){ // 모나드 자료구조의 계층을 평탄화한다. 여러겹의 컨테이너를 1겹으로 평탄화한다.
    if (!(this._value instanceof Wrapper)) {
      // 함수 컨텍스트가 래퍼가 아니라면 호출 주체를 그대로 리턴한다.
      return this;
    }
    // 함수 컨텍스트가 래퍼라면 래퍼를 하나 벗기고 다음 래퍼의 join 함수를 호출한다.
    return this._value.join();
  }
  get(){
    return this._value;
  }
  toString(){
    return `Wrapper (${this._value})`;
  }
}

function DB(table) {
  return {
    connection: 'OK'
  };
}

function find(db, id) {
  return {
    id,
    name: 'Tom',
    address: 'Seoul'
  };
}

/*
  p175
 */

const findObject = R.curry((db, id) => Wrapper.of(find(db, id)));

const getAddress = student => {
  // console.log(student.map(R.prop('address'))); // 이미 래퍼에 담겨 있다.
  // return student.map(R.prop('address'));

  return Wrapper.of(student.map(R.prop('address'))); // 일반적으로 래퍼로 감싸서 리턴한다.
};

const studentAddress = R.compose(getAddress, findObject(DB('student')));

console.log(studentAddress('444-44-4444'));
console.log(studentAddress('444-44-4444').get());
console.log(studentAddress('444-44-4444').get().get()); // 래퍼가 중첩되면 꺼내 쓰기 힘들다.

console.log();

console.log(studentAddress('444-44-4444').join());
console.log(studentAddress('444-44-4444').join().get());
// 사용자는 한 번에 join 함수 호출로 여러 겹에 컨테이너를 벗기고 get 하여 값을 구한다.
