/*
  4.5.2 함수 파이프라인
 */

const R = require('ramda');

const str = `We can only see a short distance
  ahead but we can see plenty there
  that needs to be done`;

const explode = str => str.split(/\s+/);

const count = arr => arr.length;

// 합성이 끝나면 호출되기를 기다리는 새로운 함수가 반환된다.
// 함수의 서술부: countWords
// 함수의 평가부: count, explode
const countWords = R.compose(count, explode);

// 단어의 개수를 세는 함수를 만들었다.
// countWords 함수가 호출되기 전에는 아무 평가(count, explode)도 수행하지 않는다.
console.log(countWords(str));

/*
R.compose(A, B, C);
수행순서는 C >> B >> A 이다.
함수 연결 시 이전 함수의 출력이 다음 함수의 입력으로 연결되고 자료형 및 개수가 맞아야 한다.
A use a B.
A has a B.
A 합성(조립) B. 라고 표현한다.
 */

/*
count 합성 explode = count(explode)
  = compose :: (count(B->C), explode(A->B)) -> (explode(A)->count(B)->C)
 */
