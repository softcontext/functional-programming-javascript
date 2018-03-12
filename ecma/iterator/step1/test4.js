let obj = {};

(function () {
  let s1 = Symbol('name');
  obj[s1] = 'Suzy';
})();

// console.log(obj[s1]);

(function () {
  let s2 = Symbol.for('age');
  // 전역범위에서 접근이 가능하도록 레지스트리에 추가한다.
  obj[s2] = 27;
})();

// console.log(obj[s2]);
console.log(obj[Symbol.for('age')]);
