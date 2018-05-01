var names = [
  'alonzo church',
  'Haskell curry',
  'stephen_kleene',
  'John Von Neumann',
  'stephen_kleene'
];

var result = [];

for (var i = 0; i < names.length; i++) {
  var n = names[i];

  // if (n !== undefined && n !== null) {
  if (n) {
    var ns = n.replace(/_/, ' ').split(' ');
    // '_' 기호를 공백으로 치환.공백으로 분리하여 배열을 리턴

    for (var j = 0; j < ns.length; j++) {
      var p = ns[j];
      p = p.charAt(0).toUpperCase() + p.slice(1);
      // String.slice(begin, end) : begin부터 end전까지 새로운 문자열을 리턴
      ns[j] = p;
    }

    var fullName = ns.join(' ');
    if (result.indexOf(fullName) < 0) { // 이미 존재하는지 여부를 체크
      result.push(fullName);
    }
  }
}

result.sort(); // 정렬
console.log(result);
