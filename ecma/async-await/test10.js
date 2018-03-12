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
같은 로직을 async/await 를 사용해서 구현하면 어이없을 정도로 단순하고 직관적으로 바뀐다.
promise 들을 덜 혐오스럽게 보이게 하기 위해 썼던 시간과 에너지를 생각하면
내가 뭘 했던건가하고 머리를 쥐어뜯게 될 수도 있다.
 */

// const makeRequest = () => {
//   return promise1().then(value1 => {
//
//     return Promise.all([value1, promise2(value1)]);
//
//   }).then(([value1, value2]) => {
//     return promise3(value1, value2);
//   });
// };

const makeRequest = async () => {
  const value1 = await promise1();
  const value2 = await promise2(value1);
  return promise3(value1, value2);
};

let promise = makeRequest();

promise.then(result => console.log('result =', result));
