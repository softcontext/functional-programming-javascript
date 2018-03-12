var _ = require('lodash');

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
