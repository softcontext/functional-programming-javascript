const {Just, Nothing} = require('./api');

/*
다른 방식으로 작성할 수 있을 것이다.
비어 있는 값을 만날 때 연산이 정지하도록 작성해보자.
 */

function getUser() {
  return new Just({ // 단순 객체 대신, 결과를 Just 컨테이너에 담아서 리턴한다.
    getAvatar: function() {
      return Nothing; // 아바타 없음, null 대신 Nothing을 리턴한다.
    }
  });
}

var url = getUser() // 실행결과: Just 자료형의 객체
  .bind(user => user.getAvatar()) // Just 객체가 갖고 있는 값을 user 인수로 전달한다. 실행결과: Nothing
    .bind(avatar => avatar.url); // Nothing.bind 함수는 cb 함수를 실행하지 않는다.

if (url instanceof Just) { // 정상적으로 처리되어 값이 있는 경우다.
  console.log('URL has value: ' + url.value);
} else {
  console.log('URL is empty');
}
