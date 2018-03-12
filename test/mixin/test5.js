var asButton = function() {
  this.hover = function(bool) {
    bool ? mylib.appendClass('hover') : mylib.removeClass('hover');
  };
  this.press = function(bool) {
    bool ? mylib.appendClass('pressed') : mylib.removeClass('pressed');
  };
  this.fire = function() {
    return this.action();
  };
  return this;
};

/*
  4. 캐싱 추가
  기능 믹스는 이제 모든 브라우저에서 클래식 믹스를 쉽게 능가합니다.
  (Chrome에서 20 배, Firefox 4에서 13 배).
 */
var asRectangle = (function() {
  function area() {
    return this.length * this.width;
  }
  function grow() {
    this.length++, this.width++;
  }
  function shrink() {
    this.length--, this.width--;
  }
  return function() {
    this.area = area;
    this.grow = grow;
    this.shrink = shrink;
    return this;
  };
})();

var RectangularButton = function(length, width, label, action) {
  this.length = length;
  this.width = width;
  this.label = label;
  this.action = action;
}

asButton.call(RectangularButton.prototype);
asRectangle.call(RectangularButton.prototype);

var button3 = new RectangularButton(4, 2, 'delete', function() {return 'deleted'});
console.log(button3.area()); // 8
console.log(button3.grow());
console.log(button3.area()); // 15
console.log(button3.fire()); // 'deleted'
