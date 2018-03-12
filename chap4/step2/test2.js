var R = require('ramda');

const checkType = R.curry((typeDef, obj) => {
  if (!R.is(typeDef, obj)) {
    let type = typeof obj;
    throw new TypeError(`형식 불일치: [${typeDef}] 이어야 하는데, [${type}] 입니다.`);
  }
  return obj;
});

console.log(checkType(String)('Curry'));
console.log(checkType(Number)(3));
console.log(checkType(Number)(3.5));

let now = new Date();
console.log(checkType(Date)(now));
console.log(checkType(Object)({}));
console.log(checkType(String)(42)); // TypeError
