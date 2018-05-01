/*
  5.1.3
 */

function getCountry(student) {
  let school = student.getSchool();

  // 함수 리턴결과가 null 일 수 있으므로 호출자는 성가신 null 체크를 해야하는 부담을 떠안는다.
  if (school !== null) {
    let addr = school.getAddress();

    if (addr !== null) {
      var country = addr.getCountry();

      if (country) {
        return country;
      }

      return null;
    }
    return null;
  }

  throw new Error('school 정보가 null 이다. country 정보 조회 중 에러가 발생했다.');
}

const student = {
  getSchool() {
    return {
      getAddress() {
        return null;
      },
    };
  }
}

console.log(getCountry(student));
