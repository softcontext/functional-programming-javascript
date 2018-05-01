/*
1. Overview

제너레이터로 다음 2가지를 수행하는 로직을 만들 수 있다.
* 이터러블 구현 객체 생성
* 프라미스와 같이 사용하면 await와 비슷하게 작동
 */

/*
1.1. 제너레이터로 이터러블 객체 구현하기
 */
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}
// first: Jane
// last: Doe

console.log();

/*
비교: 제너레이터 함수를 사용하지 않고 같은 로직을 구현한다면 훨씬 더 복잡해지는 것을 알 수 있다.
 */
function objectEntriesWorse(obj) {
  let index = 0;
  let propKeys = Reflect.ownKeys(obj);

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (index < propKeys.length) {
        let key = propKeys[index];
        index++;
        return { value: [key, obj[key]] };
      } else {
        return { done: true };
      }
    }
  };
}

for (let [key, value] of objectEntriesWorse(jane)) {
  console.log(`${key}: ${value}`);
}
