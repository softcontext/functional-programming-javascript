const R = require('ramda');

class Wrapper {
  constructor(value){
    this._value = value;
  }
  static of(a){
    return new Wrapper(a);
  }
  map(f){
    return Wrapper.of(f(this._value));
  }

  /*
    Wrapper { _value: Wrapper { _value: 'Seoul' } }
   */
  join(){
    // 모나드 자료구조의 계층을 평탄화한다.
    // 여러겹의 컨테이너를 1겹으로 평탄화한다.
    if (!(this._value instanceof Wrapper)) {
      // 보관중인 값 this._value가 래퍼가 아니라면 값을 의미하므로
      // 값을 보관중인 래퍼 컨테이너 객체를 리턴한다.
      return this;
    }
    // 보관중인 값 this._value가 래퍼라면
    // this._value가 가리키는 래퍼객체의 join 함수를 호출하여
    // 래퍼를 하나 벗긴다.
    // 모든 래퍼가 벗겨질 때까지 반복하게 되면
    // 결국, 보관중인 값을 취급하는 단 하나의 래퍼 컨테이너 객체만이 남는다.
    return this._value.join();
  }
  get(){
    return this._value;
  }
  toString(){
    return `Wrapper # { _value: ${this._value} }`;
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

  return Wrapper.of(student.map(R.prop('address')));
  // 일반적으로 래퍼로 감싸서 리턴한다.
  // 따라서, 래퍼가 중첩된다.
  // 이는 사용 시 여러겹의 래퍼를 벗긴 다음 사용해야 하는 불편함을 초래한다.
  // R.prop('address') : 객체에서 프로퍼티 키가 'address'인 항목의 값만을 구한다.
};

const studentAddress = R.compose(getAddress, findObject(DB('student')));

console.log(studentAddress('444-44-4444'));
// Wrapper { _value: Wrapper { _value: 'Seoul' } }
console.log(studentAddress('444-44-4444').get());
// Wrapper { _value: 'Seoul' }
console.log(studentAddress('444-44-4444').get().get());
// Seoul
// 래퍼가 중첩되면 여러번 get 함수를 호출해야 하므로 꺼내 쓰기 힘들다.
console.log('---------------');

console.log(studentAddress('444-44-4444').join());
// Wrapper { _value: 'Seoul' }
console.log(studentAddress('444-44-4444').join().get());
// Seoul
// 사용자는 한 번 join 함수를 호출하는 것으로
// 여러 겹에 래퍼 컨테이너를 벗길 수 있고
// 값을 보관하는 단 하나의 래퍼 컨테이너 객체를 얻는다.
// 그 다음, get 하여 값을 구할 수 있다.
