/*
List 모나드는 값의 목록에서 지연된 연산이 가능함을 나타낸다.

이 모나드의 unit 함수는 하나의 값을 받고
그 값을 yield 하는 generator 를 반환한다.

bind 함수는 transform 함수를 목록의 모든 요소에 적용하고
그 모든 요소를 yield 한다.
 */

function* unit(value) {
  yield value;
}

function* bind(list, transform) {
  for (var item of list) {
    yield* transform(item);
  }
}

/*
배열과 generator는 이터레이션이 가능하며 그 반복에서 bind 함수가 동작하게 된다.

다음 예제는 지연을 통해
각각 요소의 합을 만드는 목록을 어떻게 작성하는지 보여준다.
 */

// cb 함수에 배열 요소를 전달하면서 함수 실행결과를 리턴받으면 yield 한다.
var result = bind([0, 1, 2], function(element) {
  console.log('--------------', element);
  return bind([0, 1, 2], function* (element2) {
    console.log('----------------------------', element2);
    yield element + element2;
  });
});

console.log(typeof result[Symbol.iterator] === 'function'); // iterable 인지 확인한다.

for (var item of result) {
  console.log(item);
}
