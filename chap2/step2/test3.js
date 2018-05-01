var {Person, Student, Address} = require('./test');

var person1 = new Student('Tom1', 'Cruise', '444-44-4444', 'MIT');
person1.address = new Address('Korea');

var person2 = new Student('Tom2', 'Cruise', '444-44-4444', 'MIT');
person2.address = new Address('US');

var person3 = new Student('Tom3', 'Cruise', '444-44-4444', 'Princeton');
person3.address = new Address('Korea');

var person4 = new Student('Tom4', 'Cruise', '444-44-4444', 'MIT');
person4.address = new Address('Korea');

//-------------------------------------------

var selector = (country, school) =>
                  (student) => country === student.address.country && school === student.school;

var findStudentsBy = (friends, selector) => friends.filter(selector);

var students = findStudentsBy([person1, person2, person3, person4], selector('Korea', 'MIT'));
console.log(students);

// var students = person1.studentsInSameCountryAndSchool([person2, person3, person4]);
// console.log(students);
