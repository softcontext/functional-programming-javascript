/*
마무리

자바 스크립트는 기능과 상태의 결합체입니다. 상태는 일반적으로 인스턴스에 따라 다르지만 기능은 거의 모든 인스턴스에서 공유됩니다. 어쩌면이 두 가지 가장 기본적인 관심사를 분리하는 것이 우리의 관심사 일 것이며 어쩌면 믹스 인이 우리를 도울 수 있습니다.

특히 기능 믹스 인 패턴은 명확한 묘사를 제공합니다. 객체는 상태이며, 함수는 트리의 과일과 같이 큼직하게 묶여 있고, 따기를 위해 익힙니다. 실제로 이 전략은 순수한 mixin을 넘어 확장 될 수 있습니다.
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

var myCircle = asCircle.call({radius: 10});
// 상태만을 갖고 있는 객체에 asCircle.call 함수를 호출하여 기능을 추가한다.
console.log(myCircle.area()); // 314.1592653589793
