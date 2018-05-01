/*
왜 async/await가 더 나은가?
1. Concise and clean
2. Error handling
3. Conditionals
 */

function getJSON() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        needsAnotherRequest: true,
        value: 100
      });
    }, 500);
  });
}

function makeAnotherRequest(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.value = data.value + 200;
      resolve(data);
    }, 500);
  });
}

// const makeRequest = () => {
//   return getJSON().then(data => {
//     if (data.needsAnotherRequest) {
//       return makeAnotherRequest(data).then(moreData => {
//         console.log(moreData, '를 받음');
//         return moreData;
//       });
//     } else {
//       console.log(data, '를 받음');
//       return data;
//     }
//   });
// };

// 프라미스 객체를 리턴하는 함수들을 연이어 사용할 때 async/await 함수는
// 가독성을 위한 좋은 구현방법이다.
const makeRequest = async () => {
  const data = await getJSON();
  if (data.needsAnotherRequest) {
    const moreData = await makeAnotherRequest(data);
    console.log(moreData, '를 받음');
    return moreData;
  } else {
    console.log(data, '를 받음');
    return data;
  }
};

let promise = makeRequest();

console.log(promise instanceof Promise); // true

promise.then((result) => console.log('result =', result));

// await 부분의 코드를 쉽게 이해하는 방법
// -------------------------------------------
// const data = await getJSON();
// 위 코드에서 data 변수는 cb 함수의 파라미터로 생각한다.
//
// getJSON() 함수는 프라미스 객체를 리턴하는 함수여야 한다.
// 프라미스 객체를 리턴한 함수에서 resolve(data) 할 때,
// 전달되는 data가 const data 변수에 할당된다.
//
// 비동기 함수 getJSON()을 호출한 다음 메인스레드는 async 함수 밖으로
// 빠지게 되며 프라미스 객체를 리턴한 함수에서 resolve(data) 할 때,
// 다시 cb 함수의 파라미터에 해당하는 const data 코드부터 메인스레드가
// 처리를 시작한다.
//
// if (data.needsAnotherRequest) {
//   ...
// } else {
//   ...
// }
// 위 코드 부분은 getJSON() 함수가 리턴하는 프라미스 객체의 then(cb) 함수에
// 전달되는 cb 함수내 코드로 생각한다.
// 따라서, async/await 함수는 프라미스의 then 함수 체인을 보다 쉽게 이해하도록
// 동기방식의 코드처럼 작성할 수 있도록 해주는 기술이라 할 수 있다. 
