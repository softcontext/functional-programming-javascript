function Just(value) {
  this.value = value;
}

Just.prototype.bind = function(transform) {
  return transform(this.value);
};

Just.prototype.toString = function() {
  return 'Just(' + this.value + ')';
};

/*
Nothing은 빈 값을 표현한다.
 */
var Nothing = {
  bind: function() {
    console.log(arguments[0]); // bind 함수체인 기법에 따라 전달되는 cb 함수는 수행되지 않는다.
    return this;
  },
  toString: function() {
    return 'Nothing';
  }
};


var result = new Just(5)
  .bind(value => new Just(6)
    .bind(value2 => new Just(value + value2)));

console.log(result);

/*
Identity 모나드와 주된 차이점은 빈 값의 전파에 있다.
중간 단계에서 Nothing이 반환되면 연관된 모든 연산을 통과하고 Nothing을 결과로 반환하게 된다.
 */
var result2 = new Just(5)
  .bind(value => Nothing
    .bind(value2 => new Just(console.log(value + value2))));

console.log(result2.toString());

/*
Nothing.bind(cb) 함수에 전달되는 함수로직은 수행되지 않는다.
 */
