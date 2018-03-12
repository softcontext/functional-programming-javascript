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
  // try-catch 블락의 적용도 그러하다.
  // async 함수 내 코드는 then 메소드에 전달되는 cb 함수 내 배치된 코드와 같으므로
  // 겉보기에는 동기방식의 코딩스타일이지만 실제 처리는 비동기 방식의 처리임을 알 수 있다.
  try {
    var result = await getJSON();
    const data = JSON.parse(result); // 에러가 발생 가능한 지점
    console.log(data);
  } catch (e) {
    console.log('에러발생', e.message);
  }
};

makeRequest();
