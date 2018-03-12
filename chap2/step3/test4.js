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

function printPeople(people, action) {
  for (var i = 0; i < people.length; i++) {
    action(people[i]);
  }
}

function action(person) {
  if (person.country === 'US') {
    console.log(person);
  }
}

printPeople(people, action);
