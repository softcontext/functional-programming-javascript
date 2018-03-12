let db = {
  find(ssn = '000-00-0000') {
    return {ssn: ssn, firstname: 'Tom', lastname: 'Cruise'};
  }
};

// function showStudent(ssn) {
//   let student = db.find(ssn);
//   if (student !== null) {
//     console.log(student.ssn, student.firstname, student.lastname);
//   } else {
//     throw new Error('can not find student');
//   }
// }
//
// showStudent('444-44-4444');

var find = (db, id) => {
  let obj = db.find(id);
  if (obj === null) {
    throw new Error('can not find student');
  }
  return obj;
};

var csv = student => `${student.ssn}, ${student.firstname}, ${student.lastname}`;

var append = (target, info) => {
  target(info);
};

function curry(db, id, find, csv, append, target) {
  let student = find(db, id);
  let info = csv(student);
  append(target, info);
}

curry(db, '444-44-4444', find, csv, append, console.log);
