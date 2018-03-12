/*
왜 async/await가 더 나은가?
1. Concise and clean
2. Error handling
3. Conditionals
4. Intermediate values
5. Error stacks
 */

/*
여러개의 promise 들이 하나의 체인으로 선언되는 코드를 상상해보자.
그리고, 체인 어딘가에서 error 가 throw 될 것이다.
 */

function callAPromise(value) {
  return new Promise((resolve, reject) => {
    console.log(value);
    setTimeout(() => resolve(value + 1), 500);
  });
}

const makeRequest = (seed) => {
  return callAPromise(seed)
    .then((val) => callAPromise(val))
    .then((val) => callAPromise(val))
    .then((val) => callAPromise(val))
    .then((val) => callAPromise(val))
    .then((val) => {
      throw new Error("에러발생");
    });
};

makeRequest(1).catch(err => {
  console.log(err);
  // Error: 에러발생
  //     at callAPromise.then.then.then.then.then (C:\...\test11.js:29:13)
  //     at <anonymous>
});

/*
로컬 환경에서 개발 중이며 편집기에서 파일을 다룰때에는 큰 이점이 아니지만,
프로덕션 서버에서 발생하는 오류 로그를 이해하려고 할 때는 매우 유용합니다.
그런 경우 makeRequest에서 발생한 오류를 아는 것이 오류가 그 다음에 발생한다는 것을 아는 것보다 낫습니다.
 */
