/*
Maybe 모나드는 Identity 모나드와 유사하게 값을 저장한다.
더불어서, 어떤 값도 있지 않은 상태를 표현할 수 있다.
 */
function Just(value) {
  this.value = value;
}

Just.prototype.bind = function(transform) { // 함수를 받는다.
  return transform(this.value); // 받은 함수에 자신이 갖고 있는 값을 전달한다.
};

Just.prototype.toString = function() {
  return 'Just # { value: ' + this.value + ' }';
};

/*
Nothing 객체는 값이 없음을 표현하는 객체다.
 */
var Nothing = {
  bind: function() {
    console.log(typeof arguments[0]); // function
    // arguments[0] 로 받은 함수는 value2 => new Just(console.log(value + value2)) 이다.
    // 메소드 체이닝 기법에 따라 bind 메소드에 전달되는 cb 함수는 arguments 객체로
    // 받지만 사용되지 않는다.
    return this;
  },
  toString: function() {
    return 'Nothing';
  }
};

var result = new Just(5)
  .bind(value => new Just(6).bind(value2 => new Just(value + value2)));

console.log('result =', result);

/*
Maybe 모나드가 Identity 모나드와 다른 주된 차이점은 빈 값의 전파에 있다.
중간 단계에서 Nothing이 반환되면 연관된 모든 연산을 빠르게 통과하고
Nothing이 최종 결과가 된다.

이 동작은 수치 표현에서 나타나는 특별한 값인 NaN 과도 유사하다.
연산 중간에 NaN 값이 있다면 NaN은 전체 연산에 전파된다.
 */
const CB = value2 => new Just(value + value2);

var result2 = new Just(5)
  .bind(value => Nothing.bind(CB)); // CB 함수는 사용되지 않는다.

console.log(result2 instanceof Just, result2 === Nothing); // false true
console.log(result2.toString()); // Nothing
