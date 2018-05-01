// 제너레이터 함수를 사용하면 쉽게 트리구조를 구현할 수 있다.
class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  * [Symbol.iterator]() {
    yield this.value;
    if (this.left) { // 왼쪽 노드부터 방문한다.
      yield* this.left;
    }
    if (this.right) {
      yield* this.right;
    }
  }
}

// BinaryTree 클래스로 생성한 객체는 이터러블 객체다.
let tree = new BinaryTree('a',
    new BinaryTree('b',
      new BinaryTree('c'), new BinaryTree('d')),
    new BinaryTree('e'));

for (let x of tree) {
  console.log(x);
}
