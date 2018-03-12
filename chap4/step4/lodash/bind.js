var _ = require('lodash');

function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}

var object = { 'user': 'fred' };

/*
  _.bind(타겟함수, 타겟함수 내 this, 타겟함수의 파라미터 partials)
 */

var bound = _.bind(greet, object, 'hi'); // greet('hi', _)
console.log(bound('!')); // hi fred!

var bound = _.bind(greet, object, _, '!'); // greet(_, '!')
console.log(bound('hi')); // hi fred!
