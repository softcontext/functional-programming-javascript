var {Tuple} = require('./tuple');

const StringPair = Tuple(String, String); // 리턴 자료형들의 리스트
const name = new StringPair('Barkley', 'Rosser'); // 리턴 값들의 리스트

console.log(name); // _T { _1: 'Barkley', _2: 'Rosser' }

// 리턴 받은 결과인 객체에서 키 말고 값만을 구한다.
console.log(name.values()); // [ 'Barkley', 'Rosser' ]

var [first, last] = name.values(); // 해체 할당으로 편리하게 사용한다.

console.log(first, last); // Barkley Rosser
