/*
iteration 규약 = iterator 규약 + iterable 규약

interface Iterable {
  [Symbol.iterator]() : Iterator;
}
interface Iterator {
  next() : IteratorResult;
  return?(value? : any) : IteratorResult;
}
interface IteratorResult {
  value : any;
  done : boolean;
}
 */

/*
iterator 규약:
객체 내 next 메소드가 존재하고,
호출 결과로 {value: ?, done: ?} 객체를 반환하는 경우 이터레이터 객체라고 부른다.
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
