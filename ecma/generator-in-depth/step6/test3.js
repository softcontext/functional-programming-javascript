/**
 * Returns an iterable that transforms the input sequence
 * of characters into an output sequence of words.
 */
function* tokenize(chars) {
  const iterator = chars[Symbol.iterator]();
  let ch;
  do {
    ch = getNextItem(iterator); // (A)
    if (isWordChar(ch)) {
      let word = '';
      do {
        word += ch;
        ch = getNextItem(iterator); // (B)
      } while (isWordChar(ch));
      yield word; // (C)
    }
    // Ignore all other characters
  } while (ch !== END_OF_SEQUENCE);
}

const END_OF_SEQUENCE = Symbol();

function getNextItem(iterator) {
  const {value, done} = iterator.next();
  return done ? END_OF_SEQUENCE : value;
}

function isWordChar(ch) {
  return typeof ch === 'string' && /^[A-Za-z0-9]$/.test(ch);
}

/**
 * Returns an iterable that filters the input sequence
 * of words and only yields those that are numbers.
 */
function* extractNumbers(words) {
  for (const word of words) {
    if (/^[0-9]+$/.test(word)) {
      yield Number(word);
    }
  }
}

/**
 * Returns an iterable that contains, for each number in
 * `numbers`, the total sum of numbers encountered so far.
 * For example: 7, 4, -1 --> 7, 11, 10
 */
function* addNumbers(numbers) {
  let result = 0;
  for (const n of numbers) {
    result += n;
    yield result;
  }
}

function* logAndYield(iterable, prefix = '') {
  for (const item of iterable) {
    console.log(prefix + item);
    yield item;
  }
}

const CHARS = '2 apples and 5 oranges.';

const CHAIN = addNumbers(extractNumbers(tokenize(CHARS)));
console.log([...CHAIN]);
console.log('--------------');

const CHAIN2 = logAndYield(
  addNumbers(extractNumbers(tokenize(
    logAndYield(CHARS)
  ))), '==> ');

[...CHAIN2];
