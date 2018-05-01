/*
왜 async/await가 더 나은가?
1. Concise and clean
2. Error handling
 */

function getJSON() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 1000);
  });
}

// const makeRequest = () => {
//   getJSON().then(result => {
//     const data = JSON.parse(result); // 에러가 발생 가능한 지점
//     console.log(data);
//   }).catch((e) => {
//     console.log('에러발생', e.message);
//   });
// };

const makeRequest = async () => {
  // 프라미스 기법을 통한 비동기 처리방식임에도 동기방식의 코딩스타일을 적용할 수 있고
  // try-catch 블록의 적용도 같은 맥락으로 그러하다.
  // async 함수 내에서 await 부분의 코드는 then 메소드에 전달되는
  // cb 함수 내 배치된 코드와 같으므로 겉보기에는 동기방식의 코딩스타일이지만
  // 실제 처리는 비동기 방식의 처리임을 이해해야 한다.

  // try { // 비동기 함수는 try 구문으로 에러를 잡지 못한다.
    console.log('S1');
      // 이 자리에 배치된 코드중에서 cb 함수의 코드는 순서로는 동기적 코드보다 나중이다.
    console.log('S2');
  // } catch (e) {
  //   console.log('에러발생');
  // }
  console.log('S3');

  // await 구문부터 비동기 함수에 전달된 cb 함수내의 위치한 로직과 같이 작동한다.
  // 즉, await 구문부터 cb 함수의 로직으로 보면 된다.
  try {
    var result = await getJSON();
    console.log('S4');
    const data = JSON.parse(result); // 에러가 발생 가능한 지점
    console.log('S5', data);
  } catch (e) {
    console.log('에러발생', e.message);
  }
};

let promise = makeRequest();

console.log(promise instanceof Promise); // true
// 모든 async 함수는 처리결과로 프라미스 객체를 리턴한다.
// 따라서, 프라미스 메소드 체이닝 기법을 사용할 수 있다.
