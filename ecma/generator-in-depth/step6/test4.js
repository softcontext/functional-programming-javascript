const {readFile} = require('fs');

function run(generatorFunction) {
  const generatorObject = generatorFunction();

  // Step 1: Proceed to first `yield`
  generatorObject.next();

  // Step 2: Pass in a function that the generator can use as a callback
  function nextFunction(error, result) {
    if (error) {
      generatorObject.throw(error);
    } else {
      generatorObject.next(result);
    }
  }
  generatorObject.next(nextFunction);

  // Subsequent invocations of `next()` are triggered by `nextFunction`
}

// const fileNames = process.argv.slice(2);
const fileNames = [__dirname + '/test4.js'];

run(function* () {
  const next = yield;
  for (const f of fileNames) {
    const contents = yield readFile(f, {encoding: 'utf8'}, next);
    console.log('##### ' + f);
    console.log(contents);
  }
});
