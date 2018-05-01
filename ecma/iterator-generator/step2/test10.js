function* bind(list, fn) {
  for (var item of list) {
    // fn(item) 함수의 실행결과로 제너레이터 객체를 리턴해야 한다.
    // yield* 연산자를 붙이면 제너레이터 객체의 모든 yield가 순회되어 처리된다.
    // fn 함수 내에 yield 하는 모든 결과가 다시 재 yield* 되어
    // bind 함수를 호출하는 측으로 모두 리턴된다.
    yield* fn(item);
  }
}

// cb 함수의 실행결과는 제너레이터 함수다. 이 제너레이터 함수를 순회처리하기 위해서
// yield* fn(item); 코드에서 * 연산자를 붙인다.
var result = bind([1, 2, 3], function (element) {
  console.log('--------------', element);

  return bind([10, 20, 30], function* (element2) {
    console.log('----------------------------', element2);
    yield element + ',' + element2;
  });
});

console.log(typeof result[Symbol.iterator] === 'function'); // iterable 인지 확인한다.

var count = 0;
for (var item of result) {
  console.log('#' + (++count) + ' >>', item);
}
