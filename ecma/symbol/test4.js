let obj = {};

(function () {
  let s1 = Symbol('name');
  obj[s1] = 'Suzy';
})();

console.log(obj);

(function () {
  let s2 = Symbol.for('age');
  // 전역범위에서 접근이 가능하도록 레지스트리에 심볼을 추가한다.
  obj[s2] = 27;
})();

console.log(obj);
console.log(obj[Symbol.for('age')]);
// for('문자열') 함수를 사용하여 심볼 전역 레지스트리에 등록된 심볼을 사용할 수 있다.
