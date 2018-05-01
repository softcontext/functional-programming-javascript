var ok = true;

function test(some) {
  return some[ok] = some[ok] ? ++some[ok] : 1;
  // 할당하지 않고 바로 리턴한다. 오른쪽 처리결과과 왼쪽에 대입되기 때문에
  // 오른쪽과 왼쪽 같게 되고 따라서, 굳이 왼쪽에 대입한 후에 리턴할 필요가 없기 때문이다.

  // return some;
}

console.log(test({}));

var ary = ['a', 'b', 'c', 'a'];

var report = ary.reduce((obj, item) => {
  obj[item] = obj[item] ? ++obj[item] : 1;
  // 삼항연산자 처리 결과를 객체에 할당한 후, 줄을 바꾼다음 리턴하는 방식으로
  // 사용해야 한다.
  return obj;
}, {});

console.log(report);
