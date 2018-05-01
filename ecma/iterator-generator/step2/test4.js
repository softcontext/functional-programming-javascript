function *parallel() { // S2
  try {
    yield 1; // S3
    // S6: 호출측으로부터 에러를 전파 받음
  } catch (e) {
    console.log('ERROR #1', e); // S7
    // 로직처리를 중지하는 코드가 없는 상태다.
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

console.log('1 >>', gener.next()); // S1 >> .. >> S4
console.log('2 >>', gener.throw('이 예외 메시지를 사용하라!')); // S5 >> .. >> S10
console.log('3 >>', gener.next()); // S11 >> S14
