var R = require('ramda');

const checkType = R.curry((typeDef, obj) => {
  if (!R.is(typeDef, obj)) {
    let type = typeof obj;
    throw new TypeError(`형식 불일치: [${typeDef}] 이어야 하는데, [${type}] 입니다.`);
  }
  return obj;
});

// typeDef 파라미터로 자료형을 대표하는 생성자 함수를 사용한다.
console.log(checkType(String)('Curry'));
console.log(checkType(Number)(3));
console.log(checkType(Number)(3.5));

console.log(checkType(Date)(new Date()));
console.log(checkType(Object)({}));

try {
  console.log(checkType(String)(42)); // TypeError
} catch (e) {
  console.log(e.message);
  // 형식 불일치: [function String() { [native code] }] 이어야 하는데, [number] 입니다.
}
