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
