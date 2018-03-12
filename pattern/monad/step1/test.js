function Identity(value) {
  this.value = value;
}

Identity.prototype.bind = function(transform) {
  return transform(this.value);
};

Identity.prototype.toString = function() {
  return 'Identity(' + this.value + ')';
};

var result = new Identity(5) // 컨테이너가 5 값을 보관
  .bind( value => new Identity(6) // 5 값을 전달, 새 컨테이너가 6값을 보관
    .bind( value2 => new Identity(value + value2) ) ); // 6 값을 전달, 연산결과를 컨테이너에 담아 리턴

console.log(result);

//-------------------------------------------------

var iden5 = new Identity(5); // 5 값을 보관

var result2 = iden5.bind(function (value) { // 5 값을 전달
  var iden6 = new Identity(6); // 6 값을 보관

  return iden6.bind(function (value2) { // 6 값을 전달

    return  new Identity(value + value2); // 값을 취급하는 자료형을 유지
  });
});

console.log(result2);

//-------------------------------------------------

// 순서가 바뀌어도 계산결과는 같다.
var result3 = new Identity(6)
  .bind(v1 => new Identity(5).bind(v2 => new Identity(v1 + v2)));

console.log(result3);
