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
  people.forEach(person => selector(person) && printer(person));
}

const inCountry = country =>
                    person => country === person.country;

printPeople(people, inCountry('US'), console.log);
