/*
  https://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/

  믹스인은 함수가 가져할 자원의 일부를 외부로 독립시켜 사용하는 객체다.
  그 자체로 쓰이기 보다는 다른 객체으 로직을 확장하는 용도로 활용하므로 추상적이라고 볼 수 있다.
  전통적인 상속방법으로 제공하기 보다는 믹스인을 사용하여 다중 상속을 모방하여 코드를 재사용한다.

  1. 클래식 믹스
 */
var Circle = function() {};

// Circle 생성자를 사용하여 만드는 새 객체에 제공하는 자원을 등록하는 클래식한 방법이다.
Circle.prototype = {
  area: function() {
    return Math.PI * this.radius * this.radius;
  },
  grow: function() {
    this.radius++;
  },
  shrink: function() {
    this.radius--;
  }
};

/*
  그러나 실제로, 그러한 중량 혼합물은 불필요합니다. 간단한 객체 리터럴로 충분합니다.
 */
var circleFns = { // 객체 리터럴(객체를 뜻하는 문자)
  area: function() {
    return Math.PI * this.radius * this.radius;
  },
  grow: function() {
    this.radius++;
  },
  shrink: function() {
    this.radius--;
  }
};

/*
  확장 함수
  source가 가진 자원을 destination 객체에 추가한다.
 */
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

/*
  새 객체가 가져야 할 프로퍼티를 정의한다.
 */
var RoundButton = function(radius, label) {
  this.radius = radius;
  this.label = label;
};

/*
  circleFns 객체가 가진 자원을 RoundButton.prototype 객체에 추가한다.
  이로써 RoundButton.prototype 객체는 기능이 확장된다.
 */
extend(RoundButton.prototype, circleFns);

console.log(RoundButton.prototype);

var btn = new RoundButton(10, '둥근버튼')
console.log(btn.area().toFixed(2)); // 314.16
