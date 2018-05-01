function* bind(list, gener) {
  for (let item of list) {
    yield* gener(item);
  }
}

// yield* 연산자는 for-of와 같으며 피연산자인 제너레이터 객체내 모든 로직의
// 수행을 의미한다.

function* print(item) { // 제너레이터 함수
  console.log(item);

  yield item;
  yield item + 5;
}

let result = [...bind([10, 20, 30], print)];
console.log('result =', result);


// 제너레이터, 이터러블 객체를 done:true 가 될 때까지 순회처리하는 방법
// #1. gener.next() 반복 또는 iter.next() 반복 호출
// #2. for-of
// #3. yield* (제너레이터 함수 내에서 사용하며 for-of와 같다)
// #4. [...gener or iter] (스프레드 연산자와 같이 사용)
// #5. var [x, y] = gener 또는 var [x, y] = iter (해체할당 구문과 같이 사용)
