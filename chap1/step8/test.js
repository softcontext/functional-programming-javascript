var valid = false;
var elem = document.querySelector('#student-ssn');

elem.onkeyup = function (event) {
  // console.log(event.srcElement.value, event.target.value);
  var val = elem.value;

  if (val !== null && val.length !== 0) {
    val = val.replace(/\s|-/g,'');
    if (val.length === 9) {
      console.log(`right SSN: ${val}!`);
      valid = true;
    }
  } else {
    console.log(`wrong SSN: ${val}!`);
    valid = false;
  }
};
