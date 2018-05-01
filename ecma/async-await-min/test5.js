/*
Handling Errors in Async/Await

Another great thing about Async/Await is that
it allows us to catch any unexpected errors in a good old try/catch block.
We just need to wrap our await calls like this:
 */

async function doSomethingAsync() {
  try {
    // This async call may fail.
    let result = await someAsyncCall();
  } catch (error) {
    // If it does we will catch the error here.
  }
}

/*
The catch clause will handle errors provoked by the awaited asynchronous calls or
any other failing code we may have written inside the try block.

If the situation requires it, we can also catch errors upon executing the async function.
Since all async functions return Promises
we can simply include a .catch() event handler when calling them.
 */

// Async function without a try/catch block.
async function doSomethingAsync() {
  // This async call may fail.
  let result = await someAsyncCall();
  return result;
}

// We catch the error upon calling the function.
doSomethingAsync().then(successHandler).catch(errorHandler);
