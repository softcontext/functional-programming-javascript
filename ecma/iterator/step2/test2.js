/*
iterable: Symbol.iterator 메소드를 제공한다.
객체 내 Symbol.iterator 메소드가 존재하고
호출 결과로 이터레이터 객체를 반환하는 경우 이터러블 객체라고 부른다.
 */

let iterable = {
  array: [1, 2, 3, 4, 5],
  nextIndex: 0,
  [Symbol.iterator]: function () {
    return { // 이터레이터 객체를 리턴한다.
      array: this.array,
      nextIndex: this.nextIndex,
      next: function () {
        return this.nextIndex < this.array.length ?
          {value: this.array[this.nextIndex++], done: false} :
          {value: undefined, done: true};
      }
    };
  }
};

let iter = iterable[Symbol.iterator](); // 이터러블 객체에서 이터레이터 객체를 꺼낸다.

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
