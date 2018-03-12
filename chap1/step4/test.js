let db = {
  find(ssn = '000-00-0000') {
    return {ssn: ssn, firstname: 'Tom', lastname: 'Cruise'};
  }
};

function showStudent(ssn) {
  let student = db.find(ssn);
  if (student !== null) {
    console.log(student.ssn, student.firstname, student.lastname);
  } else {
    throw new Error('can not find student');
  }
}

showStudent('444-44-4444');
