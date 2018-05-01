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

const makeRequest = () => {

  return getJSON().then(data => {

    if (data.needsAnotherRequest) {
      // 프라미스 처리 후 구한 데이터를 이용하여 또 다른 프라미스를 이용할 필요가 생긴다.
      // 구한 data를 이용하여 더 상세한 데이터를 구한다.
      return makeAnotherRequest(data).then(moreData => {
        console.log(moreData, '를 받음');
        return moreData;
      });

    } else {
      console.log(data, '를 받음');
      return data;
    }

  });
};

let promise = makeRequest();

console.log(promise instanceof Promise); // true

promise.then((result) => console.log('result =', result));
/*
코드를 보는 것만으로도 머리가 아프다.
메인 promise에서 마지막 결과가 나오기까지 많은 nesting과 대괄호들, return문들이 필요하다.
이런 코드를 읽기란 쉽지 않다.
 */
