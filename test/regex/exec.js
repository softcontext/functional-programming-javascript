// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case
var re = /quick\s(brown).+?(jumps)/ig; // 플래그 g를 붙여도 첫 번째 찾은 대상의 정보를 보여준다.
// .+? : 어떤 글자가 1~N개 있을 때 매칭, 하나로 만족! 글로벌하게 반복 적용!
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog Quick Brown Bear Jumps');
console.log(result);

/*
? 대하여

만약 수량자 *,+,?,{} 바로 뒤에 사용한다면,
기본적으로 탐욕스럽던(가능한 한 많이 일치시키는) 것과는 반대로 수량자를 탐욕스럽지 않게 만듭니다
가능한 가장 적은 문자들에 일치시킵니다.
예를 들어, . /\d+/를 "123abc"에 적용시키면 "123"이 일치합니다.
그러나 /\d+?/를 같은 문자열에 적용시키면 오직 "1"만 일치합니다.
 */

console.log('123abc'.match(/\d+/)); // [ '123', index: 0, input: '123abc' ], 탐욕스럽다.
console.log('123abc'.match(/\d+?/)); // [ '1', index: 0, input: '123abc' ], 하나로 만족!
console.log('123abc'.match(/\d+/g)); // [ '123' ], 탐욕스럽다.
console.log('123abc'.match(/\d+?/g)); // [ '1', '2', '3' ], 하나로 만족! 글로벌하게 반복 적용!
