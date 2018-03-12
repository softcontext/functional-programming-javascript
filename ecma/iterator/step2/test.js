/*
iterable >> iterator = iteration 규약 구현 객체
 */

/*
iterator: next 메소드를 제공한다.
객체 내 next 메소드가 존재하고
호출 결과로 {value: ?, done: ?} 객체를 반환하는 경우 이터레이터라고 부른다.
 */

let iter = {
  array: [1, 2, 3, 4, 5],
  nextIndex: 0,
  next: function () {
    return this.nextIndex < this.array.length ?
      {value: this.array[this.nextIndex++], done: false} :
      {value: undefined, done: true};
  }
};

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
