
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

// const makeRequest = function () {
//   // S2
//   return getJSON() // S3 >> S7(Promise 객체를 리턴받음)
//     .then(  // S8(cb 함수 전달)
//       data => { // S15(인수: 100)
//         console.log(data) // S16(출력: 100)
//         return 'done'; // S17(리턴: 'done')
//       }); // S9(Promise 객체를 리턴)
// };

const makeRequest = async function () {
  // async 함수 내 로직은 결국, then 함수에 전달되는 cb 함수 내 로직이다.
  let data = await getJSON(); // 프라미스 객체의 cb 함수에서 resolve 함수로 결과를 리턴하기를 기다린다.
  console.log(data);
  return 'done';
};

let promise = makeRequest(); // S1 >> S10
// async 함수는 호출결과로 프라미스 객체를 리턴한다.

console.log(promise instanceof Promise); // S11(출력: true)

promise.then( // S12(cb 함수 전달)
  (data) => { // S18(인수: 'done')
    console.log(data); // S19(출력: 'done')
  });

// S13(Main Thread 는 현재 IDLE 상태)

/*
await 키워드는 오직 async 로 정의된 함수의 내부에서만 사용될 수 있다.
모든 async 함수는 암묵적으로 promise를 반환한다.
await getJSON() 는 console.log 의 호출이 getJSON() promise가 resolve된 후에 일어나고,
그 후에 값을 출력할 것이라는 것을 의미한다.
 */
