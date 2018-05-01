Rx.Observable
  .fromEvent(document.querySelector('#student-ssn'), 'keyup')
  .pluck('srcElement', 'value')
  .map(ssn => ssn.replace(/\s|-/g, ''))
  // .filter(ssn => ssn !== null && ssn.length === 9)
  .filter(ssn => ssn && ssn.length === 9)
  .subscribe(validSsn => {
    console.log(`right SSN: ${validSsn}`);
    document.querySelector('#student-ssn')
      .nextElementSibling.innerHTML = `right SSN: ${validSsn}`;
  });

// http://blog.rangle.io/rxjs-where-is-the-if-else-operator/
// if/else statements are a staple for handling conditional actions.
// It's natural for most developers to reach for the if/else statement
// when a decision needs to be made in code.
// However, in the reactive programming paradigm (e.g. with RxJS)
// this conditional statement is mysteriously unavailable.
// How can you code without it?
