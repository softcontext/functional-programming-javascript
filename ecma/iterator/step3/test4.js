function *parallel() { // S2
  try {
    yield 1; // S3
    // S6
  } catch (e) {
    console.log('ERROR #1', e); // S7
  }
  // S8
  try {
    yield 2; // S9
    // S12
  } catch (e) {
    console.log('ERROR #2', e);
  }
  // S13
}

let gener = parallel();

console.log(gener.next()); // S1 >> S4
console.log(gener.throw('이 예외 메시지를 사용해라!')); // S5 >> S10
console.log(gener.next()); // S11 >> S14
