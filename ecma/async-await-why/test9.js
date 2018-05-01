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
value1 과 promise2(value1) 처리결과로 얻은 value2 를 Promise.all 로 묶어서
nesting 을 조금 피할 수 있다.

하지만, 이런 식의 접근은 코드의 의미를 희생시켜 버린다.
value1 과 value2 가 배열에 함께 묶여야하는 이유는 오로지 promise nestring 을 피하기 위해서다.
 */

const makeRequest = () => {
  console.log('makeRequest # 1');

  return promise1().then(value1 => {
    console.log('makeRequest # 2 : value1 =', value1);
    // makeRequest # 2 : value1 = 1

    return Promise.all([value1, promise2(value1)]);
  }).then(([value1, value2]) => {
    console.log('makeRequest # 3 : value2 =', value2);
    // makeRequest # 3 : value2 = 3

    return promise3(value1, value2);
  });
};

let promise = makeRequest();

promise.then(result => console.log('result =', result));
// result = 4
