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

function printPeopleInTheUS(people) {
  for (var i = 0; i < people.length; i++) {
    var person = people[i];
    
    // if (person.country === 'US') {
    //   console.log(person);
    // }
    action(person);
  }
}

function action(person) {
  if (person.country === 'US') {
    console.log(person);
  }
}

printPeopleInTheUS(people);
