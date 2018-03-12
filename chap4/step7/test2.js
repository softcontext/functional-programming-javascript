const R = require('ramda');

const runProgram = R.pipe( // R.pipe: 왼쪽 함수부터 수행한다.
  R.map(R.toLower), // 데이터를 변형한다. 배열의 길이는 유지된다.
  R.uniq, // 중복을 제거한다.
  R.sortBy(R.identity)
  // R.identity: 아무것도 하지 않는 함수. 함수 전달이 필요하지만 딱히 로직은 줄 필요 없을 때 사용한다.
);

var result = runProgram([
  'Functional', 'Programming', 'Curry', 'Memoization', 'Partial', 'Curry', 'Programming'
]);

console.log(result);
