const _ = require('lodash');

var count = 0;

class IO {
  constructor(effect) {
    if (!_.isFunction(effect)) {
      throw 'usage IO: 함수를 생성자 파라미터로 전달해야 합니다.';
    }
    this.effect = effect;
    // 새 객체 생성 시 함수를 받아 effect라는 프로퍼티 키로 보관한다.
  }
  static of(value) {
    return new IO(() => value);
    // 파라미터로 받은 값을 그대로 저장하는 것이 아니라
    // 파라미터로 받은 값을 그대로 리턴하는 함수를 저장한다.
  }
  static from(fn) {
    return new IO(fn);
    // 함수를 받아 컨테이너에 보관한다.
  }
  map(fn) {
    // 함수1( 함수2( 함수3() ) ) 형태로 함수를 중첩시킨다.
    console.log('함수 호출순서 #', ++count);
    console.log(fn.toString());
    console.log();

    let self = this;
    return new IO( () => fn(self.effect()) );
    // 보관중인 함수를 실행한 후, 그 결과를
    // 파라미터로 받은 함수 fn에 파라미터로 전달하는 로직을 갖고 있는
    // 새 함수를 보관하는 새 IO 컨테이너 객체를 리턴한다.
    // 이 시점에  self.effect() 코드는 실행되는 것이 아니다.
  }
  chain(fn) {
    return fn(this.effect());
  }
  run() {
    return this.effect();
  }
}

module.exports = {
  IO
}
