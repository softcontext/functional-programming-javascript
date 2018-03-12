/*
왜 async/await가 더 나은가?
1. Concise and clean
2. Error handling
3. Conditionals
4. Intermediate values
 */

function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(1); }, 500);
  });
}

function promise2(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(value + 2); }, 500);
  });
}

function promise3(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(a + b); }, 500);
  });
}

/*
이런 식으로 코드를 작성하고 싶지 않다면,
value1 과 value2 를 Promise.all 로 묶어서 nesting을 조금 피할 수 있다.
 */

// const makeRequest = () => {
//   return promise1().then(value1 => {
//     console.log('value1 =', value1);
//     return promise2(value1).then(value2 => {
//       console.log('value1 =', value1, 'value2 =', value2);
//       return promise3(value1, value2);
//     });
//   });
// };

/*
하지만, 이런 식의 접근은 가독성 측면에서 코드의 의미를 희생시켜 버린다.
value1 과 value2 가 배열에 함께 묶여야하는 이유는 오로지 promise nestring 을 피하기 위해서다.
 */

const makeRequest = () => {
  return promise1().then(value1 => {

    return Promise.all([value1, promise2(value1)]);

  }).then(([value1, value2]) => {
    return promise3(value1, value2);
  });
};

let promise = makeRequest();

promise.then(result => console.log('result =', result));
