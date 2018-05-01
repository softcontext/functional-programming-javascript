var {Person, Student, Address} = require('./model');

var person1 = new Student('Haskell', 'Curry', '111-11-1111', 'MIT');
person1.address = new Address('US');
person1.birthYear = 1900;

var person2 = new Student('Barkley', 'Rosser', '222-22-2222', 'MIT');
person2.address = new Address('Greece');
person2.birthYear = 1907;

var person3 = new Student('John', 'von Neumann', '333-33-3333', 'Princeton');
person3.address = new Address('Hungary');
person3.birthYear = 1903;

var person4 = new Student('Alonzo', 'Church', '444-44-4444', 'Princeton');
person4.address = new Address('US');
person4.birthYear = 1903;

var person5 = new Student('David', 'Hilbert', '555-55-5555', 'MIT');
person5.address = new Address('Germany');
person5.birthYear = 1903;

var person6 = new Student('Alan', 'Turing', '666-66-6666', 'Stanford');
person6.address = new Address('England');
person6.birthYear = 1912;

var person7 = new Student('Stephen', 'Kleene', '777-77-7777', 'MIT');
person7.address = new Address('US');
person7.birthYear = 1909;

var people = [person1, person2, person3, person4, person5, person6, person7];

module.exports = {
  Person,
  Student,
  Address,
  people
}
