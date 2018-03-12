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
promise1 을 호출하고 여기서 return된 값을 사용해서 promise2 를 호출하고,
promise3 을 호출하기 위해 두개의 promise들의 결과를 사용한다.

이런 식으로 코드를 작성하고 싶지 않다면,
value1 과 value2 를 Promise.all 로 묶어서 nesting을 조금 피할 수 있다.
 */
const makeRequest = () => {
  return promise1().then(value1 => {
    console.log('value1 =', value1); // S1(출력: value1 = 1)

    return promise2(value1).then(value2 => {
      console.log('value1 =', value1, 'value2 =', value2); // S2(출력: value1 = 1 value2 = 3)

      return promise3(value1, value2);
    });
  });
};

let promise = makeRequest();

promise.then(result => console.log('result =', result)); // S3(출력: result = 4)
