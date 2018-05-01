/*
왜 async/await가 더 나은가?
1. Concise and clean
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

// const makeRequest = function () {
//   // S2
//   return getJSON() // S3 >> ... >> S7(Promise 객체를 리턴받음)
//     .then(  // S8(cb 함수 전달)
//       data => { // S15(파라미터를 받음: 100)
//         console.log(data); // S16(출력: 100)
//         return 'done'; // S17(리턴: 'done')
//       }); // S9(then 함수는 Promise 객체를 리턴)
// };

const makeRequest = async function () {
  // async 함수 내 로직은 결국, then 함수에 전달되는 cb 함수 내 로직이다.
  let data = await getJSON(); // 프라미스 객체의 cb 함수에서 resolve 함수로 결과를 리턴하기를 기다린다.
  console.log(data);
  return 'done';
};

/*
```
  let data = await getJSON();
  console.log(data);
  return 'done';
```
위 코드는 결국 아래 코드와 의미론적으로 같다.
처리로직을 cb 함수 형태로 전달하는 비동기방식의 코딩모습이 동기방식의 코딩 모습으로 변했다.
따라서, await 키워드 다음에 처리되도록 배치된 로직은 동기적 관점으로 바라보면 안되고
비동기적 관점으로 바라보아야 한다.
await 키워드 다음의 로직은 가상의 cb함수로 감싼 형태로 바라보면 이해가 쉬울 것이다.
```
  .then(data => {
      console.log(data);
      return 'done';
    });
```
 */

let promise = makeRequest(); // S1 >> ... >> S10
// async 함수는 호출결과로 프라미스 객체를 리턴한다.
// 이는 프라미스의 then() 함수가 프라미스 객체를 리턴하는 것과 같은 작동방식이다.

console.log(promise instanceof Promise); // S11(출력: true)

promise.then( // S12(cb 함수 전달)
  (data) => { // S18(파라미터를 받음: 'done')
    console.log(data); // S19(출력: 'done')
  });

// S13(Main Thread 는 여기서 IDLE 상태가 됨)

/*
await 키워드는 오직 async 로 정의된 함수의 내부에서만 사용될 수 있다.
모든 async 함수는 암묵적으로 promise를 반환한다.
let data = await getJSON(); 코드는 getJSON() 내부의 프라미스가 resolve(100); 코드로
리졸브 되면서 전달되는 값이 할당됨을 의미한다.
 */
