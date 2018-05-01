/*
So, does Async/Await make promises obsolete?

No, not at all. When working with Async/Await we are still using Promises under the hood.
A good understanding of Promises will actually help you in the long run and
is highly recommended.

There are even use cases where Async/Await doesn't cut it and
we have to go back to Promises for help.
One such scenario is when we need to make multiple independent asynchronous calls and
wait for all of them to finish.

If we try and do this with async and await, the following will happen:
 */

const timerStart = function() {
  let oldTime = Date.now();
  console.log('>> Start');
  return function() {
    console.log('>> End');
    return Date.now() - oldTime;
  };
}

function getValueA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(10);}, 2000);
  });
}

function getValueB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(20);}, 4000);
  });
}

function getValueC() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(30);}, 3000);
  });
}

/*
To send all requests at the same time a Promise.all() is required.
This will make sure we still have all the results before continuing,
but the asynchronous calls will be firing in parallel, not one after another.

This way the function will take much less time.
The getValueA and getValueC calls will have already finished by the time getValueB ends.
Instead of a sum of the times,
we will effectively reduce the execution
to the time of the slowest request (getValueB - 4 seconds).
 */

async function getABCFaster() {
  // Promise.all() allows us to send all requests at the same time.
  let results = await Promise.all([getValueA(), getValueB(), getValueC()]);
  return results.reduce((total, value) => total + value);
}

let timerStop = timerStart();
getABCFaster().then(function (data) {
  console.log('data =', data);
  console.log(timerStop());
});
