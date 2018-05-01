/*
What is Async/Await?
Async/Await is a long anticipated JavaScript feature that
makes working with asynchronous functions
much more enjoyable and easier to understand.

It is build on top of Promises and is compatible with all existing Promise-based APIs.

어싱크 함수의 선언방법
async function someName(){...}

어싱크 함수의 기능
Automatically transforms a regular function into a Promise.
When called async functions resolve with whatever is returned in their body.
Async functions enable the use of await.

프라미스 함수의 호출방법
var result = await someAsyncCall();

어웨이트 연산자의 기능
When placed in front of a Promise call, await forces the rest of the code to wait until that Promise finishes and returns a result.
Await works only with Promises, it does not work with callbacks.
Await can only be used inside async functions.
 */
