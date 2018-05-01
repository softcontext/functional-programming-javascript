var {Tuple} = require('./tuple');
// Tuple: 함수의 리턴자료형의 구성정보를 취급하는 생성자 함수

const StringPair = Tuple(String, String);
// 리턴 자료형은 String, String 형태의 객체여야 한다.

const name = new StringPair('Barkley', 'Rosser');
// StringPair라는 튜플 생성자 함수를 사용하는 방법

console.log(name);
// _T { _1: 'Barkley', _2: 'Rosser' }

console.log(name.values());
// [ 'Barkley', 'Rosser' ]
// 리턴 받은 결과인 객체에서 키 말고 값만을 구한다.

var [first, last] = name.values();
// 해체 할당으로 편리하게 연계처리를 할 수 있다.

console.log(first, last);
// Barkley Rosser
