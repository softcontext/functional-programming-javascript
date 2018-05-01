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

async function getABC() {
  let A = await getValueA(); // getValueA takes 2 second to finish
  let B = await getValueB(); // getValueB takes 4 second to finish
  let C = await getValueC(); // getValueC takes 3 second to finish

  return A + B + C;
}

let timerStop = timerStart();
getABC().then(function (data) {
  console.log('data =', data);
  console.log(timerStop());
});

/*
Each await call will wait for the previous one to return a result.
Since we are doing one call at a time the entire function
will take 9 seconds from start to finish (2+4+3).

This is not an optimal solution,
since the three variables A, B, and C aren't dependent on each other.
In other words we don't need to know the value of A before we get B.
We can get them at the same time and shave off a few seconds of waiting.

To send all requests at the same time a Promise.all() is required.
This will make sure we still have all the results before continuing,
but the asynchronous calls will be firing in parallel, not one after another.
 */
