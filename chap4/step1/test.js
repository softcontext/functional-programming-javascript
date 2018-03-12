const trim = str => str.replace(/^\s*|\s*$/g, '');

const normalize = str => str.replace(/\-/g, '');

var ssn = ' 444-44-4444 ';

console.log(normalize(ssn));

console.log(trim(ssn));

console.log();

function pipe(str, ...fns) {
  return fns.reduce((a, b) => b(a), str);
}

console.log(pipe(ssn, trim, normalize));

console.log(pipe(ssn, normalize, trim));
