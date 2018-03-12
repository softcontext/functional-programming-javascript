class Person {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
}

var people = [
  new Person('Tom', 'US'),
  new Person('Dick', 'Korea'),
  new Person('Harry', 'US'),
];

function printPeople(people, selector, printer) {
  // people.forEach(person => {
  //   if (selector(person)) {
  //     printer(person);
  //   }
  // });
  people.forEach(person => selector(person) && printer(person));
}

// function action(person) {
//   if (person.country === 'US') { // selector
//     console.log(person); // printer
//   }
// }

const inUs = person => person.country === 'US';

printPeople(people, inUs, console.log);
