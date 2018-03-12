function compose() {
  let args = arguments; // 함수 2개를 받아서 저장
  let start = args.length - 1;

  return function () {
    let i = start;
    let result = args[start].apply(this, arguments); // 첫 번째 함수를 호출

    while (i--) {
      result = args[i].call(this, result); // 두 번째 함수를 호출(첫 번째 함수의 결과를 전달)
    }

    return result; // 최종 결과를 리턴
  };
}

const str = `We can only see a short distance
  ahead but we can see plenty there
  that needs to be done`;

const explode = str => str.split(/\s+/);

const count = arr => arr.length;

const countWords = compose(count, explode);

console.log(countWords(str));
