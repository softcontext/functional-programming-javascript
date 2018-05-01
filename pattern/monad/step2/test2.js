/*
bind 함수는 리스트의 요소를 하나씩 꺼내서 제너레이터 함수인 transform 함수에
전달하고 transform 함수에서 yield 하는 모든 값을 재 yield 한다.
 */

function* bind(list, transform) {
  for (var item of list) {
    yield* transform(item);
  }
}

/*
다음 예제는 지연을 통해 두 배열의 요소의 합을 만드는 과정을 어떻게 작성하는지 보여준다.
 */

// cb 함수에 배열 요소를 전달하면서 함수 실행결과를 리턴받으면 yield 한다.
var result = bind([10, 20, 30], function(item1) {
  console.log('--------------', item1);

  return bind([1, 2, 3], function* (item2) {
    console.log('----------------------------', item2);
    yield item1 + item2;
  });
});

// for (var value of result) {
//   console.log('value =', value);
// }

console.log([...result]);
console.log();

/*
List 모나드는 다수의 값을 취급하는 리스트에서 지연된 연산이 가능함을 나타낸다.
이 모나드의 unit 함수는 받은 값을 바로 yield 하는 generator 를 반환한다.
 */

function* unit(value) {
  console.log('to do something with ' + value);
  yield value;
}

var some = bind([10, 20, 30], unit);
console.log([...some]);
