var _ = require('lodash');

/*
sum[1, 2, 3, 4, 5]
  = 1 + 2 + sum[3, 4, 5]
  = 1 + 2 + 3 + sum[ 4, 5]
  = 1 + 2 + 3 + 4 + sum[5]
 */

var nums = [1, 2, 3, 4, 5];

/*
https://lodash.com/docs#isEmpty
https://lodash.com/docs#head
https://lodash.com/docs#drop
 */

function sum(arr) {
  if (_.isEmpty(arr)) {
    return 0;
  }
  return _.first(arr) + sum(_.drop(arr));
}

console.log(sum(nums));
