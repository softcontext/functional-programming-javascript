class Person {
  constructor(firstname, lastname, ssn){
    this._firstname = firstname;
    this._lastname = lastname;
    this._ssn = ssn;

    this._address = null;
    this._birthYear = null;
  }
  get firstname(){
    return this._firstname;
  }
  get lastname(){
    return this._lastname;
  }
  get ssn(){
    return this._ssn;
  }

  get address(){
    return this._address;
  }
  get birthYear(){
    return this._birthYear;
  }

  get fullname() {
    return [this.firstname, this.lastname].join(' ');
  }

  set address(address){
    return this._address = address;
  }
  set birthYear(birthYear){
    return this._birthYear = birthYear;
  }

  toString() {
    return `Person {${this._firstname}, ${this._lastname}}`;
  }

  peopleInSameCountry(friends){
    var result = [];
    for (let idx in friends) {
      var friend = friends[idx];
      if (this.address.country === friend.address.country) {
        result.push(friend);
      }
    }
    return result;
  }
}

class Student extends Person {
  constructor(firstname, lastname, ssn, school){
    super(firstname, lastname, ssn);

    this._school = school;
  }

  get school(){
    return this._school;
  }

  studentsInSameCountryAndSchool(friends){
    var closeFriends = super.peopleInSameCountry(friends);

    var result = [];
    for (let idx in closeFriends) {
      var friend = closeFriends[idx];
      if (this.school === friend.school) {
        result.push(friend);
      }
    }
    return result;
  }
}

class Address {
  constructor(country){
    this._country = country;
  }
  get country(){
    return this._country;
  }
  set country(country){
    this._country = country;
  }
}

module.exports = {
  Person,
  Student,
  Address
};
