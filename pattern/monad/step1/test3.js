/*
Maybe 모나드는 null 값에 의한 에러가 발생하는 것을 막아준다.
다음 코드는 로그인 사용자의 아바타를 가져오는 예시다.
 */

function getUser() {
  return {
    getAvatar: function() {
      return null; // 아바타 없음
    }
  }
}

/*
빈 값을 확인하지 않는 상태로 메소드를 연결해 호출하면 객체가 null을 반환할 때 TypeErrors가 발생할 수 있다.
 */

try {
  var url = getUser().getAvatar().url;
  console.log(url); // 여기는 절대 실행되지 않음
} catch (e) {
  console.log(e); // TypeError: Cannot read property 'url' of null
}
