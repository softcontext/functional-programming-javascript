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

var RectangularButton = function(length, width, label, action) {
  this.length = length;
  this.width = width;
  this.label = label;
  this.action = action;
}

/*
  5. Curry 추가하기
  growBy 및 shrinkBy 증가분의 매개 변수화를 위해 curry화 된 함수가 있는 믹스인이 있습니다.
 */
Function.prototype.curry = function() {
  var fn = this;

  // var args = Array.prototype.slice.apply(arguments);
  var args = [].slice.call(arguments, 0); // arguments 객체를 배열로 변환

  return function() {
    return fn.apply(this, args.concat([].slice.call(arguments, 0)));
    // return grow.apply(button4, [2]+[]);
  };
};

var asRectangle = (function() {
  function area() {
    return this.length * this.width;
  }
  function grow(growBy) {
    this.length += growBy, this.width +=growBy;
    // button4.length += 2, button4.width += 2;
  }
  function shrink(shrinkBy) {
    this.length -= shrinkBy, this.width -= shrinkBy;
  }
  return function(options) {
    this.area = area;
    this.grow = grow.curry(options['growBy']); // 2
    this.shrink = shrink.curry(options['shrinkBy']); // 2
    return this;
  };
})();

asButton.call(RectangularButton.prototype);
asRectangle.call(RectangularButton.prototype, {growBy: 2, shrinkBy: 2});

var button4 = new RectangularButton(2, 1, 'add', function() {return 'added'});
console.log(button4.area()); // 2*1 = 2
console.log(button4.grow());
console.log(button4.area()); // 4*3 = 12
console.log(button4.fire()); // 'added'
