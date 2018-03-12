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

  if (n !== undefined && n !== null) {
    var ns = n.replace(/_/, ' ').split(' '); // '_' 기호를 공백으로 치환.공백으로 분리하여 배열을 리턴

    for (var j = 0; j < ns.length; j++) {
      var p = ns[j];
      p = p.charAt(0).toUpperCase() + p.slice(1); // begin부터 end전까지 새로운 문자열을 리턴
      ns[j] = p;
    }

    if (result.indexOf(ns.join(' ')) < 0) { // 이미 존재하는지 여부를 체크
      result.push(ns.join(' '));
    }
  }
}

result.sort(); // 정렬

console.log(result);
