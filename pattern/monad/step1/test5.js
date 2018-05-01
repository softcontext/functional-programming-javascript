const {Just, Nothing} = require('./test5.api');

/*
null 상태인 리턴결과를 그냥 사용하면 TypeErrors가 발생한다.
조건문을 두어 null 여부를 체크하는 것은 번거롭다.
그렇다면, null 상태가 되면 연산이 정지하도록 작성해 보자.
 */

function getUser() {
  // 처리대상인 객체를 그냥 취급하는 대신, 객체를 Just 컨테이너에 담아서 리턴한다.
  return new Just({
    getAvatar: function() {
      return Nothing; // 실제 값이 없으면 null 대신 Nothing 을 리턴한다.
    }
  });
}

var url = getUser() // Just 컨테이너를 리턴받는다.
  .bind(user => user.getAvatar()) // Nothing 컨테이너를 리턴받는다.
  .bind(avatar => avatar.url); // Nothing.bind 함수는 cb 함수를 사용하지 않는다.

if (url instanceof Just) { // 정상적으로 처리되었다면 Just 자료형이다.
  console.log('URL has value: ' + url.value);
} else if (url === Nothing) { // 처리 중 null 상태가 되었다면 Nothing 객체다.
  console.log('URL is empty');
}
