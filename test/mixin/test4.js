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
options 인수를 사용하여 빌린 동작을 매개 변수화 할 수 있습니다.
options === { growBy: 2, shrinkBy: 2 }
 */
var asOval = function(options) {
  this.area = function() {
    return Math.PI * this.longRadius * this.shortRadius;
  };
  this.ratio = function() {
    return this.longRadius / this.shortRadius;
  };
  this.grow = function() {
    this.shortRadius += (options.growBy / this.ratio());
    this.longRadius += options.growBy;
  };
  this.shrink = function() {
    this.shortRadius -= (options.shrinkBy / this.ratio());
    this.longRadius -= options.shrinkBy;
  };
  return this;
}

var OvalButton = function(longRadius, shortRadius, label, action) {
  this.longRadius = longRadius;
  this.shortRadius = shortRadius;
  this.label = label;
  this.action = action;
};

asButton.call(OvalButton.prototype);
asOval.call(OvalButton.prototype, {
  growBy: 2,
  shrinkBy: 2
});

var button2 = new OvalButton(3, 2, 'send', function() {
  return 'message sent'
});

console.log(button2.area()); // 18.84955592153876
console.log(button2.grow());
console.log(button2.area()); // 52.35987755982988
console.log(button2.fire()); // message sent
