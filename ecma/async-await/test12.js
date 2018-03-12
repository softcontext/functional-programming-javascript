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
  throw new Error("에러발생");
};

makeRequest(1).catch(err => {
  console.log(err);
  // Error: 에러발생
  //   at makeRequest (C:\...\test12.js:33:9)
  //   at <anonymous>
});

/*
결론

Async/await 는 지난 몇 년 동안 JavaScript 에 추가 된 가장 혁신적인 기능 중 하나입니다.
그것은 어느 구문이 좋지 않은지 쉽게 깨닫게 해주고, 직관적인 대체물을 제공합니다.
 */
