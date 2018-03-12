/*
왜 async/await가 더 나은가?
 */

function getJSON() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 1000);
  });
}

const makeRequest = () => {
  // try {
    getJSON().then(result => {
      const data = JSON.parse(result); // 에러가 발생 가능한 지점
      console.log('S3', data);
    }).catch((e) => { // cb 함수에서 발생하는 에러는 catch 메소드로 잡아야 한다.
      console.log('에러발생', e.message);
    });
    console.log('S1');
  // } catch (e) {
  //   console.log('에러발생');
  // }
  console.log('S2');
  // 에러 발생 시점은 try 구문 영역을 벗어 난 다음이기 때문에
  // 비동기 함수는 try 구문으로 에러를 잡을 수 없다.
};

makeRequest();
