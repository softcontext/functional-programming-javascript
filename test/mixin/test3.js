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

var RoundButton = function(radius, label, action) {
    this.radius = radius;
    this.label = label;
    this.action = action;
};

/*
  두 개의 믹스를 함께 넣으면 둥근 버튼이 생깁니다.
 */
asButton.call(RoundButton.prototype);
asCircle.call(RoundButton.prototype);

var button1 = new RoundButton(4, 'yes!', function() {return 'you said yes!'});
console.log(button1.fire()); // you said yes!
console.log(button1.__proto__);
