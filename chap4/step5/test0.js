var _ = require('lodash');
var R = require('ramda');

var {Tuple} = require('./tuple');

/*
  4.5.1
 */

const Node = Tuple(Number, Tuple); // Node 자료형은 Number, Tuple 2개를 담는 객체다.

const element = R.curry((val, tuple) => new Node(val, tuple));

var element4 = element(4, null);

// console.log(typeof element4); // object
// console.log(R.type(element4)); // Object
// console.log(R.is(Tuple, element4)); // false
// console.log(R.is(Node, element4)); // true
// console.log(element4 instanceof Tuple); // false
// console.log(element4 instanceof Node); // true

var element3 = element(3, element4);
var element2 = element(2, element3);
var element1 = element(1, element2);
console.log(element4);
console.log(element3);
console.log(element2);
console.log(element1);

console.log(element1.values()); // [ 1, _T { _1: 2, _2: _T { _1: 3, _2: [Object] } } ]
console.log(element1._2._2._2._1); // 4
console.log(element1._2._2._2._2); // null

console.log('----------------');

var grades = element(1, element(2, element(3, element(4, null))));
console.log(grades);
console.log(R.is(Tuple, grades)); // false
console.log(R.is(Node, grades)); // true
console.log(grades instanceof Tuple); // false
console.log(grades instanceof Node); // true

/*
먼 길을 돌았지만,
R.type으로 자료형이 일치하는지 체크하는 것이 맞다.
다만, console.log(R.is(Tuple, grades)); // false 이므로
미리 선언한 자료형으로 체크할 수 없는게 문제다.
이에 대한 해결책은 무엇인가? 자료형의 체크는 꼭 하고 싶다.
 */
