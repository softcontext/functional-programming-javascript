var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i; // g 플래그가 없으면 상세한 정보를 얻는다.
var found = str.match(re);

console.log(found);
// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.
console.log();

console.log('ABC'.match(/[\w]/gi)); // g 플래그가 있으면 매칭된 정보만 얻는다.
// [ 'A', 'B', 'C' ]
console.log();

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
console.log();

console.log(str.match(/.{1,2}/g));
// [ 'AB',
//   'CD',
//   'EF',
//   'GH',
//   'IJ',
//   'KL',
//   'MN',
//   'OP',
//   'QR',
//   'ST',
//   'UV',
//   'WX',
//   'YZ',
//   'ab',
//   'cd',
//   'ef',
//   'gh',
//   'ij',
//   'kl',
//   'mn',
//   'op',
//   'qr',
//   'st',
//   'uv',
//   'wx',
//   'yz',
//   '!' ]
