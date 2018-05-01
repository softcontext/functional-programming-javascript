/*
왜 async/await가 더 나은가?
1. Concise and clean
2. Error handling
3. Conditionals
4. Intermediate values
 */

function promise1() {
  console.log('promise1 # 1');
  return new Promise((resolve, reject) => {
    console.log('promise1 # 2');
    setTimeout(() => { resolve(1); }, 500);
  });
}

function promise2(value) {
  console.log('promise2 # 1');
  return new Promise((resolve, reject) => {
    console.log('promise2 # 2');
    setTimeout(() => { resolve(value + 2); }, 500);
  });
}

function promise3(a, b) {
  console.log('promise3 # 1');
  return new Promise((resolve, reject) => {
    console.log('promise3 # 2');
    setTimeout(() => { resolve(a + b); }, 500);
  });
}

/*
promise1 을 호출하고 여기서 resolve 한 값을 사용해서 promise2 를 호출하고,
promise3 을 호출하기 위해 두개의 promise 들의 결과를 사용한다.

value1 과 value2 를 Promise.all 로 묶어서 nesting 을 조금 피할 수 있다.
 */
const makeRequest = () => {
  console.log('makeRequest # 1');
  
  return promise1().then(value1 => {
    console.log('makeRequest # 2 : value1 =', value1);
    // makeRequest # 2 : value1 = 1

    return promise2(value1).then(value2 => {
      console.log('makeRequest # 3 : value2 =', value2);
      // makeRequest # 3 : value2 = 3

      return promise3(value1, value2);
    });
  });
};

let promise = makeRequest();

promise.then(result => console.log('result =', result));
// result = 4
