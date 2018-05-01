/*
#4. Generators as observers (data consumption)

interface Observer {
    next(value? : any) : void;
    return(value? : any) : void;
    throw(error) : void;
}

As an observer, a generator pauses until it receives input.
There are three kinds of input, transmitted via the methods
specified by the interface:

* next() sends normal input.
* return() terminates the generator.
* throw() signals an error.

1. Sending values via next()
If you use a generator as an observer, you send values to it
via next() and it receives those values via yield:
 */

function* dataConsumer() {
  console.log('Started');
  console.log(`1. ${yield}`); // (A)
  console.log(`2. ${yield}`);
  return 'result';
}

/*
We now call genObj.next(), which starts the generator.
Execution continues until the first yield, which is where the generator pauses.
The result of next() is the value yielded in line (A) (undefined, because yield doesn’t have an operand).
In this section, we are not interested in what next() returns,
because we only use it to send values, not to retrieve values.
 */
let genObj = dataConsumer();
console.log(genObj.next());
// Started
// { value: undefined, done: false }
console.log(genObj.next('a'));
// 1. a
// { value: undefined, done: false }
console.log(genObj.next('b'));
// 2. b
// { value: 'result', done: true }
