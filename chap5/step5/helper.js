function DB(table) {
  return {
    connection: 'OK'
  };
}

function find(db, id) {
  if (id === '444-44-4444') {
    return {
      ssn: id,
      firstname: 'Tom',
      lastname: 'Cruise',
      address: 'Seoul'
    };
  } else {
    return null;
  }
}

class Student {

}

module.exports = {
  DB,
  find,
  Student
}
