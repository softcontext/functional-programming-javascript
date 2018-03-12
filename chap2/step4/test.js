function isNull(val) {
  return val === null;
}

function negate(func) {
  return function () {
    // console.log(arguments); // { '0': {} }
    return !func.apply(null, arguments);
  };
}

const isNotNull = negate(isNull);

console.log(isNull({})); // false
console.log(isNotNull({})); // true

// console.log(isNull.apply(null, { '0': {} }));
