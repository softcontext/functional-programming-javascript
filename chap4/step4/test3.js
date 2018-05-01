var _ = require('lodash');

/*
  https://lodash.com/docs#bind
  _.bind(func, thisArg, [partials])

    func (Function): The function to bind.
    thisArg (*): The this binding of func.
    [partials] (...*): The arguments to be partially applied.

    (Function): Returns the new bound function.

  https://lodash.com/docs#partial
  _.partial(func, [partials])

    func (Function): The function to partially apply arguments to.
    [partials] (...*): The arguments to be partially applied.

    (Function): Returns the new partially applied function.
 */
const Scheduler = (function () {
  const delayedFn = _.bind(setTimeout, undefined, _, _);

  return {
    delay5: _.partial(delayedFn, _, 500),
    delay10: _.partial(delayedFn, _, 1000),
    delay30: _.partial(delayedFn, _, 3000)
  };
})();

Scheduler.delay30(function () {
  console.log('3초 후에 실행합니다!');
});

Scheduler.delay5(function () {
  console.log('0.5초 후에 실행합니다!');
});
