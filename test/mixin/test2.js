/*
  2. 기능 믹스
 */
var asCircle = function() {
  this.area = function() {
    return Math.PI * this.radius * this.radius;
  };
  this.grow = function() {
    this.radius++;
  };
  this.shrink = function() {
    this.radius--;
  };
  return this;
};

var Circle = function(radius) {
  this.radius = radius;
};

/*
  asCircle 함수가 가진 기능을 Circle.prototype 객체에 추가한다.
 */
asCircle.call(Circle.prototype);

var circle1 = new Circle(10);
console.log(circle1.area().toFixed(2)); // 314.16
