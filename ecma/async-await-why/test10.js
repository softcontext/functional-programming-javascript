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
같은 로직을 async/await 를 사용해서 구현하면 어이없을 정도로 단순하고 직관적으로 바뀐다.
promise 들을 덜 혐오스럽게 보이게 하기 위해 썼던 시간과 에너지를 생각하면
그 동안 내가 뭘 했던건가 하고 머리를 쥐어뜯게 될 수도 있다.
 */

const makeRequest = async () => {
  // console.log('makeRequest # 1');
  const value1 = await promise1();
  // console.log('makeRequest # 2 : value1 =', value1);
  const value2 = await promise2(value1);
  // console.log('makeRequest # 3 : value2 =', value2);
  return promise3(value1, value2);
};

let promise = makeRequest();

promise.then(result => console.log('result =', result));
// result = 4
