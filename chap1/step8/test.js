var valid = false;
var elem = document.querySelector('#student-ssn');

elem.onkeyup = function (event) {
  // console.log(event.srcElement.value, event.target.value);
  var val = elem.value;
  val = val.replace(/\s|-/g,''); // 공백과 - 기호를 모두 제거한다.

  // if (val !== null && val.length !== 0 && val.length === 9) {
  if (val && val.length === 9) { // 위 코드와 효과가 같다.
    console.log(`right SSN: ${val}!`);
    elem.nextElementSibling.innerHTML = `right SSN: ${val}`;
    valid = true;
  } else {
    console.log(`wrong SSN: ${val}!`);
    elem.nextElementSibling.innerHTML = `wrong SSN: ${val}`;
    valid = false;
  }
};
