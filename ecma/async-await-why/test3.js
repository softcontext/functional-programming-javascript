/*
왜 async/await가 더 나은가?
1. Concise and clean
비동기 함수 사용 시 필요한 에러 처리를 동기 방식의 코드처럼 보이는 형태로 작성할 수 있다.
 */

function getJSON() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 1000);
  });
}

const makeRequest = () => {
  try {
    console.log('S1');

    getJSON().then(result => {
      console.log('S4');
      const data = JSON.parse(result); // 에러가 발생 가능한 지점, result가 문자열이 아니다.
      console.log('S5', data);
    });

    console.log('S2');
  } catch (e) {
    console.log('에러발생');
  }

  console.log('S3');
  // 에러 발생 시점은 try 구문 영역을 벗어 난 다음이기 때문에
  // 비동기 함수를 try 구문으로 감싸서 에러를 캐치할 수 없다.
  // 따라서, 비동기 함수에서 에러가 발생한다면 비동기 함수에 전달되는 cb 함수의
  // 첫 번째 파라미터로 에러객체를 전달하는 관습이 생겼고 이러한 관습을 기반으로 에러를 처리한다.
};

makeRequest();
