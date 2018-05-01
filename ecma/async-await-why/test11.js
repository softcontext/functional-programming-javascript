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
그리고, 체인 어딘가에서 error 가 throw 된다고 가정하자.
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
로컬 환경에서 개발 중이고 편집기에서 파일을 다룬다면 큰 이점은 없다.
하지만, 프로덕션 서버에서 발생하는 오류 로그를 이해하려고 할 때는 매우 유용하다.

에러 로그가 callAPromise.then.then.then.then.then 이라고 표시된다면 쉽게 어디가
문제인지 파악하기 힘들다. 처음에는 callAPromise 함수를 살펴보게되지
makeRequest 함수부터 살펴보지는 않을 것이기 때문이다.
에러는 makeRequest 함수 내부에서 발생했는데 오류메시지는 callAPromise 와 관련이 있다고
표시되고 있는 것이 문제다.
 */
