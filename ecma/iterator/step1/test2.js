let obj = null;
let s1 = null;

(function () {
  let s2 = Symbol();
  s1 = s2;
  obj = {[s2]: 'my'};

  console.log(obj[s2]);
  console.log(obj[s2] === obj[s1]);
})();

console.log(obj[s1]);
