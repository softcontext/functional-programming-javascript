/*
identity 모나드는 가장 단순한 모나드로써 값을 감싸는 래퍼다.
Identity 생성자는 앞서 살펴본 unit과 같은 함수를 제공한다.
 */

function Identity(value) { // 객체 생성 시점에 보관할 값을 받는다.
  this.value = value;
}

Identity.prototype.bind = function(transform) { // 함수를 받는다.
  return transform(this.value); // 받은 함수에 자신이 갖고 있는 값을 전달한다.
};

Identity.prototype.toString = function() {
  return 'Identity # { value: ' + this.value + ' }';
};

/*
다음 코드는 덧셈연산을 Identity 모나드를 활용해 연산하는 예시다.
 */
var result1 = new Identity(5) // 컨테이너가 5 값을 보관, bind 함수에 5 값을 전달
  .bind(value => new Identity(6).bind(value2 => new Identity(value + value2)));
  // 두 값을 더한다음 같은 자료형의 보관 컨테이너에 담아 리턴한다.

console.log(result1);
console.log('--------------------');

var iden5 = new Identity(5); // 5 값을 보관
var result2 = iden5.bind(function (value) { // 5 값을 cb 함수에 전달
  var iden6 = new Identity(6); // 6 값을 보관
  return iden6.bind(function (value2) { // 6 값을 cb 함수에 전달
    return new Identity(value + value2); // 두 값을 사용, 취급하는 자료형을 유지
  });
});

console.log(result2);
console.log('--------------------');

// 순서가 바뀌어도 계산결과는 같다.
var result3 = new Identity(6).bind(
  v1 => new Identity(5).bind(
    v2 => new Identity(v1 + v2)
  )
);

console.log(result3);
console.log('--------------------');

console.log(result3 instanceof Identity);
console.log(result3.toString());
