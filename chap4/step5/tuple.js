const R = require('ramda');

if (!Function.prototype.getName) {
  Function.prototype.getName = function(){
    return /function ([^(]*)/.exec(this.toString())[1].toLowerCase();
  };
}

/*
http://ramdajs.com/docs/#curry

  var addFourNumbers = (a, b, c, d) => a + b + c + d;

  var curriedAddFourNumbers = R.curry(addFourNumbers);
  var f = curriedAddFourNumbers(1, 2);
  var g = f(3);
  g(4); //=> 10

http://ramdajs.com/docs/#is
See if an object (val) is an instance of the supplied constructor.
This function will check up the inheritance chain, if any.
 */
const checkType = R.curry((typeDef, obj) => { // 전달되는 cb은 인수를 모두 받을 때 기동한다.

  /*
  Tuple(Number, Tuple), element(4, null) 라고 설정할 때,
  obj 의 실제 값 4가 'number' 타입인지 체크한다.
  obj 의 실제 값이 null이라면 타입을 체크하지 않는다.
   */
  if (obj !== null) { // null 체크는 typeof 연산자로 할 수 없다. typeof null === 'object' 임.
    console.log(obj, typeDef.getName());
    console.log(typeof obj, typeDef.getName());
    // if (!R.is(typeDef, obj)) { // obj 가 typeDef 자료형인지 체크한다.
    if (typeof obj !== typeDef.getName()) {
      console.log(obj instanceof typeDef);
      if (!(obj instanceof typeDef)) {
        let type = typeof obj;
        throw new TypeError(`형식 불일치: [${typeDef}]이어야 하는데, [${type}]입니다.`);
      }
    }
  }

  return obj;
});

/*
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some
some() 메소드는 배열 내 일부 요소가 제공된 함수에 의해 구현된 테스트를 통과하는지를 테스트합니다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
ReferenceError 객체는 존재하지 않는 변수를 참조했을 때 발생하는 에러를 나타냅니다.
 */

// console.log(this === exports); // true

const Tuple = function Tuple(...typeInfo) {

  const _T = function (...values) {
    // null 도 취급하도록 다음 코드를 주석처리 한다.
    // if (values.some(val => val === null || val === undefined)) {
    //   throw new ReferenceError('튜플은 null 값을 가질 수 없습니다.');
    // }

    if (values.length !== typeInfo.length) {
      throw new ReferenceError('튜플 항수(자료형 및 개수)가 프로토타입과 맞지 않습니다.');
    }

    values.forEach((val, index) => {
      // FIXME: 자료형 체크 로직의 미비로 해당 로직을 적용하지 않는다.
      // this['_' + (index+1)] = checkType(typeInfo[index])(val);
      // // checkType(자료형)(값) : 함수의 분할처리(curry)
      // // 튜플의 인덱스는 1부터 시작한다.
      this['_' + (index+1)] = val;
    });

    Object.freeze(this); // 불변 객체로 설정한다. writable, configurable 설정이 false가 된다.
  };

  // console.log(this === global); // true

  // _T.prototype.values = () => {
  //   // console.log(this === global); // true
  //   return Object.keys(this).map(k => this[k], this);
  // }

  /*
    객체에 메소드를 추가할 때 주의사항:
    메소드 내 this 키워드를 사용한다면 lexical scope 임을 명심해야 한다.
    애로우 함수내 this는 가까운 스코프로 자동 바인딩 됨에 따라 this는 global이 된다.
    명백히 의도한 결과가 아니므로 코드를 다음처럼 변경해야 한다.
   */

  _T.prototype.values = function () {
    return Object.keys(this).map(k => this[k], this);
  };

  return _T;
};

module.exports = {
  Tuple
}
