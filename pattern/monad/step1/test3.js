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
빈 값을 확인하지 않는 상태로 메소드를 연결해 호출하면
객체가 null을 반환할 때 TypeErrors가 발생할 수 있다.
메소드 리턴이 null이 아님을 확인하기 위해서
메소드마다 조건문을 두어 해결할 수 있지만 이는 매우 번거로운 일이다.
 */

try {
  var url = getUser().getAvatar().url;
  console.log(url); // 여기 코드는 실행되지 않는다.
} catch (e) {
  console.log(e);
  // TypeError: Cannot read property 'url' of null
}
