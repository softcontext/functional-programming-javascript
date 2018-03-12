var _ = require('lodash');

var names = [
  'alonzo church',
  'Haskell curry',
  'stephen_kleene',
  'John Von Neumann',
  'stephen_kleene',
  'alonzo Church'
];

var result = _.chain(names)
  .filter(_.isValid)
  .map(s => s.replace(/_/, ' '))
  .map(_.startCase) // uniq 함수뒤에 배치하면 일부 중복이 제대로 제거되지 않는다.
  .uniq()
  .sort()
  .value();

console.log(result);

// var result = [];
//
// for (var i = 0; i < names.length; i++) {
//   var n = names[i];
//
//   if (n !== undefined && n !== null) {
//     var ns = n.replace(/_/, ' ').split(' ');
//
//     for (var j = 0; j < ns.length; j++) {
//       var p = ns[j];
//       p = p.charAt(0).toUpperCase() + p.slice(1);
//       ns[j] = p;
//     }
//
//     if (result.indexOf(ns.join(' ')) < 0) {
//       result.push(ns.join(' '));
//     }
//   }
// }
//
// result.sort(); // 정렬
//
// console.log(result);
