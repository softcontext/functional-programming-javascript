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

/////////////////////////////////////////////////////////

var makeRequest = async () => {
  const value1 = await promise1();
  const value2 = await promise2(value1);
  return promise3(value1, value2);
};

/*
깊은 이해를 위해서 위 코드를 promise 객체의 then 메소드 체이닝 방식의 코드로
다시 변경해 보자. async/await 함수를 익히는 데, async/await 함수를 올드 스타일의
코드로 바꾸어 보는 것이 도움이 된다.
 */

var makeRequest = () => {
  return promise1().then(value1 => {
    return promise2(value1).then(value2 => {
      return promise3(value1, value2);
    });
  });
};

var makeRequest = () => {
  return promise1().then(value1 => {
    return Promise.all([value1, promise2(value1)]);
  }).then(([v1, v2]) => {
    return promise3(v1, v2);
  });
};

let promise = makeRequest();

promise.then(result => console.log('result =', result));
// result = 4
