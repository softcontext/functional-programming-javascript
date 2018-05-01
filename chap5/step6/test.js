const _ = require('lodash');
const {IO} = require('./class.io.monad');

const divTag = {
  id: 'student-name',
  innerHTML: 'alonzo church'
};

// 가짜 DOM 객체
const document = {
  querySelector(selector) {
    return divTag;
  }
};

/*
  5.3.3 IO 모나드
 */

// const read = (document, selector) => document.querySelector(selector).innerHTML;

const read = (document, selector) => {
  return () => document.querySelector(selector).innerHTML;
};

// const write = (document, selector, val) => {
//   document.querySelector(selector).innerHTML = val;
//   return val;
// };

const write = (document, selector) => {
  return (val) => {
    document.querySelector(selector).innerHTML = val;
    return val;
  };
};

const readDom = _.partial(read, document);
const writeDom = _.partial(write, document);

const changeToStartCase = IO
  .from(readDom('#student-name')) // 불순한 부분: 외부 엘리먼트의 id 속성값을 참조
  .map(_.startCase) // 순수한 부분
  .map(writeDom('#student-name')); // 불순한 부분: 외부 엘리먼트의 id 속성값을 참조

console.log('OLD =', divTag);
// OLD = { id: 'student-name', innerHTML: 'alonzo church' }

changeToStartCase.run();

console.log('NEW =', divTag);
// NEW = { id: 'student-name', innerHTML: 'Alonzo Church' }
