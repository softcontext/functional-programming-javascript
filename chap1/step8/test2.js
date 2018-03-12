Rx.Observable.fromEvent(document.querySelector('#student-ssn'), 'keyup')
  .pluck('srcElement', 'value')
  .map(ssn => ssn.replace(/\s|-/g, ''))
  .filter(ssn => ssn !== null && ssn.length === 9)
  .subscribe(validSsn => {
    console.log(`right SSN: ${validSsn}!`);
  });
