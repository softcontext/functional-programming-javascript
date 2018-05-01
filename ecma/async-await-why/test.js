/*
asnyc/await 는 비동기 코드를 작성하는 새로운 방법이다.
이전에는 비동기코드를 작성하기 위해 callback 이나 promise 를 사용해야 했다.

asnyc/await 는 promise 를 기반으로 한다.
async/await는 promise처럼 non-blocking 이다.
async/await는 비동기 코드의 겉모습과 동작을 좀 더 동기방식의 코드처럼 보이게 만들어준다.
이것이 async/await의 가장 큰 장점이다.

코드 처리의 흐름을 따라 살펴보자.
S1 >> S2 >> S3 >> ... >> S19
 */

function getJSON() {
  // S4
  return new Promise( // S5(Promise 객체 생성)
    (resolve, reject) => {
      setTimeout( // S6(비동기 함수 호출)
        () => {
          resolve(100); // S14(리턴: 100)
        }, 1000);
    });
}

const makeRequest = function () {
  // S2
  return getJSON() // S3 >> ... >> S7(Promise 객체를 리턴받음)
    .then(  // S8(cb 함수 전달)
      data => { // S15(파라미터를 받음: 100)
        console.log(data); // S16(출력: 100)
        return 'done'; // S17(리턴: 'done')
      }); // S9(then 함수는 Promise 객체를 리턴)
};

let promise = makeRequest(); // S1 >> ... >> S10

console.log(promise instanceof Promise); // S11(출력: true)

promise.then( // S12(cb 함수 전달)
  (data) => { // S18(파라미터를 받음: 'done')
    console.log(data); // S19(출력: 'done')
  });

// S13(Main Thread 는 여기서 IDLE 상태가 됨)
