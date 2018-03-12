class Person {
  constructor(firstname, lastname, ssn) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.ssn = ssn;
  }
  get fullname() {
    // this로 접근하면 부작용이 발생한다. 함수의 재 사용성이 떨어진다.
    return [this.firstname, this.lastname].join(' ');
  }
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

/*
객체지향 vs 함수지향

변수, 메소드를 묶는 방법에 가장 큰 차이가 있다.

객제지향은 변수와 메소드를 하나의 처리단위로 단단히 묶어서 응집도가 높다.
일반적으로 변수에 직접 접근하는 것을 막고자 숨긴다.
객체지향은 기능을 구현하기 위해서 특수한 자료형의 객체를 생성한 다음 사용한다.

함수지향은 파라미터로 받는 소규모의 자원만을 대상으로 작동한다.
따라서, 함수지향은 사용자에게 데이터를 숨길 필요가 없다.
따라서, 함수를 사용하더라도 외부 자원은 불변이며 굳이 객체내에 함수를 배치할 필요가 없다.
함수지향은 변수와 메소드를 느슨하게 결합하여 사용하는 것이다.
이렇게 하려면 변수를 갖고 있는 객체를 불변객체로 취급하고 메소드를 외부 함수로 분리하여
사용하게끔 해야 한다.
 */
