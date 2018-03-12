/*
asnyc/await 는 비동기 코드를 작성하는 새로운 방법이다.
이전에는 비동기코드를 작성하기 위해 callback이나 promises를 사용해야 했다.

asnyc/await 는 실제로는 promises 위에서 만들어졌다.
Asnyc/await 는 plain callback 이나 node callback과 사용될 수 없다. TODO: 그게 뭔데?

async/await는 promise처럼 non-blocking 이다.
async/await는 비동기 코드의 겉모습과 동작을 좀 더 동기 코드와 유사하게 만들어준다.
이것이 async/await의 가장 큰 장점이다.
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
  return getJSON() // S3 >> S7(Promise 객체를 리턴받음)
    .then(  // S8(cb 함수 전달)
      data => { // S15(인수: 100)
        console.log(data) // S16(출력: 100)
        return 'done'; // S17(리턴: 'done')
      }); // S9(Promise 객체를 리턴)
};

let promise = makeRequest(); // S1 >> S10

console.log(promise instanceof Promise); // S11(출력: true)

promise.then( // S12(cb 함수 전달)
  (data) => { // S18(인수: 'done')
    console.log(data); // S19(출력: 'done')
  });

// S13(Main Thread 는 현재 IDLE 상태)
