/*
왜 async/await가 더 나은가?
1. Concise and clean
2. Error handling
3. Conditionals
4. Intermediate values
5. Error stacks
6. Debugging
 */

function callAPromise(value) {
  return new Promise((resolve, reject) => {
    console.log(value);
    setTimeout(() => resolve(value + 1), 500);
  });
}

// const makeRequest = (seed) => {
//   return callAPromise(seed)
//     .then((val) => callAPromise(val))
//     .then((val) => callAPromise(val))
//     .then((val) => callAPromise(val))
//     .then((val) => callAPromise(val))
//     .then((val) => {
//       throw new Error("에러발생");
//     });
// };

const makeRequest = async (seed) => {
  seed = await callAPromise(seed);
  seed = await callAPromise(seed);
  seed = await callAPromise(seed);
  seed = await callAPromise(seed);
  seed = await callAPromise(seed);
  throw new Error("에러발생");
};

makeRequest(1).catch(err => {
  console.log(err);
  // Error: 에러발생
  //   at makeRequest (C:\...\test12.js:33:9)
  //   at <anonymous>
});

/*
에러 메시지에서 에러가 발생한 부분인 makeRequest 함수를 표시해 줌으로써 보다
빠르게 에러부분을 인지할 수 있다.

Async/await 는 지난 몇 년 동안 JavaScript 에 추가 된 가장 혁신적인 기능 중 하나다.
Async/await 는 기존에 작성하던 구문이 좋지 않음을 쉽게 깨닫게 해주고,
직관적인 대체물을 제공한다.
Async/await 는 구문은 노드는 8 버전 이상에서는 트랜스파일링 없이 바로 사용할 수 있다.
ES8(ECMAScript 2017)에 정식으로 채택되었다.
 */
