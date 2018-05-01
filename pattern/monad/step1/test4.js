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

대안으로 조건문을 두어 null 여부를 확인하고 사용하면 되지만
이 방법은 코드를 장황하게 만든다.
 */

try {
  // var url = getUser().getAvatar().url;

  var url;
  var user = getUser();

  if (user !== null) { // 널 체크
    var avatar = user.getAvatar();

    if (avatar !== null) { // 널 체크의 중첩
      url = vatar.url;
    }
  }

  console.log(url); // undefined
} catch (e) {
  console.log(e);
}
