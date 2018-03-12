function DB(table) {
  return {
    connection: 'OK'
  };
}

function find(db, id) {
  return {
    ssn: id,
    firstname: 'Tom',
    lastname: 'Cruise',
    address: 'Seoul'
  };

  /* 리턴값을 바꾸어 가면서 테스트 해보자. */

  // return null;
}

class Student {

}

module.exports = {
  DB,
  find,
  Student
}
