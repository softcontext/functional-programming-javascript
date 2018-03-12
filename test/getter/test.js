class Person {
  constructor(firstname, lastname, ssn) {
    Object.defineProperty(this, 'firstname', {
      value:firstname,
      writable:true,
      enumerable:false,
      configurable:false
    });
    Object.defineProperty(this, 'lastname', {
      value:lastname,
      writable:true,
      enumerable:false,
      configurable:false
    });
    // this.firstname = firstname;
    // this.lastname = lastname;

    this.ssn = ssn;

    Object.defineProperty(this, 'fullname', {
      get(){return [this.firstname, this.lastname].join(' ');},
      set(fullname){
        this.firstname = fullname.split(' ')[0];
        this.lastname = fullname.split(' ')[1];
      },
      enumerable:true,
      configurable:false
    });
  }
  // get fullname() {
  //   return [this.firstname, this.lastname].join(' ');
  // }
}

class Student extends Person {
  constructor(firstname, lastname, ssn, college) {
    super(firstname, lastname, ssn);
    this.college = college;
  }
}

var person = new Student('Alonzo', 'Church', '444-44-4444', 'Princeton');
console.log(person);
console.log(person.fullname); // Alonzo Church
person.fullname = 'Tom Cruise';
console.log(person.fullname); // Tom Cruise

console.log();

person.__proto__ = null; // person 객체는 이제 부모가 없다.
console.log(Object.getOwnPropertyNames(person)); // getter/setter는 새 객체가 직접 갖고 있다.

console.log();

console.log(Object.getOwnPropertyDescriptors(person)); // 상세 내역을 조회한다.

console.log();

const getters = Object.entries(Object.getOwnPropertyDescriptors(person))
  .filter(([key, descriptor]) => typeof descriptor.get === 'function')
  .map(([key]) => key)

console.log(getters); // 객체에서 getter의 이름만을 조회한다.
