var _ = require('lodash');

String.prototype.first = _.partial(String.prototype.substring, 0, _); // 인수 _ 기호는 비워둠을 의미

console.log('Functional Programming'.first(3)); // String.prototype.substring(0, 3) 코드와 동일
console.log('Functional Programming'.first()); // String.prototype.substring(0) 코드와 동일

String.prototype.asName = _.partial(String.prototype.replace, /(\w+)\s(\w+)/, '$2, $1');

console.log('Alonzo Church'.asName()); // 'Alonzo Church'.replace(/(\w+)\s(\w+)/, '$2, $1')

String.prototype.explode = _.partial(String.prototype.match, /[\w]/gi);
// g 플래그가 있으면 매칭된 정보만 얻는다.

console.log('ABC'.explode()); // 'ABC'.match(/[\w]/gi)

if (!String.prototype.parseUrl) { // 충돌여부를 체크하는 방어 로직
  String.prototype.parseUrl = _.partial(String.prototype.match, /(http[s]?|ftp):\/\/([^:\/\s]+)\.([^:\/\s]{2,5})/);
}

console.log('http://example.com'.parseUrl());
// [ 'http://example.com', // 찾은 문자열
//   'http', // 첫 번째 캡쳐
//   'example', // 두 번째 캡쳐
//   'com', // 세 번째 캡쳐
//   index: 0, // 찾은 문자열의 위치
//   input: 'http://example.com' ] // 입력 문자열
