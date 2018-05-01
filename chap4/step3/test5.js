/*
  4.3.2 함수 템플릿

  주의: 책 부록 301p에서 안내하는 기술은 저자가 사용한 기술이 아니다.
  npm install log4js 로 설치하는 모듈은 https://www.npmjs.com/package/log4js 이고,
  책에서 사용하는 log4js 모듈은 https://github.com/stritti/log4js 이다.

  ----------------------------------------------------------------------------------
  책에서 사용하는 모듈을 사용하기 위해서는
  소스 코드를 다운로드 후 다음 작업을 수행해야 한다.
  1: cd log4js
  2: npm install
  3-1: grunt build // 하지만, 여기서 에러가 발생한다.
  3-2: grunt build --force 로 컴파일 하면 컴파일은 되지만 제대로 작동하지 않는다.
  4: Include then the target/log4js.min.js file in your project.

  해결: 따라서, 직접 컴파일 하는 대신,
  https://sourceforge.net/projects/log4js.berlios/files/latest/download 에서
  다운받은 것을 사용한다.
  log4js.js 파일 끝에 module.exports = Log4js 구문을 추가한다.
  ----------------------------------------------------------------------------------

  에러: log4js.js:1821
  ReferenceError: window is not defined

  해결: 저자가 소개하는 기술은 브라우저에서 코드가 수행됨을 전제로 하는 것을 알 수 있다.
  따라서, HTML 파일을 만들고 JS 코드를 임포트하여 브라우저 환경에서 테스트하도록 한다.

  이 때, module 이 undefined 라고 투덜되면 module.exports = Log4js 구문을 주석처리한다.
  ----------------------------------------------------------------------------------
 */

const R = require('ramda');
// const Log4js = require('log4js'); // 책에서 사용한 기술이 아님!
const Log4js = require('./lib/log4js');

// console.log(Object.keys(Log4js).filter(k=>k.includes('Appender')).sort());
// 어팬더의 목록을 확인한다.

const logger = function (appender, layout, name, level, message) {
  const appenders = {
    'alert': new Log4js.JSAlertAppender(),
    'console': new Log4js.BrowserConsoleAppender()
  };
  const layouts = {
    'basic': new Log4js.BasicLayout(),
    'json': new Log4js.JSONLayout(),
    'xml': new Log4js.XMLLayout()
  };

  const myAppender = appenders[appender]; // appender 선택
  myAppender.setLayout(layouts[layout]); // layout 선택

  const logger = Log4js.getLogger(name); // 로깅 주제틀 설정
  logger.addAppender(myAppender); // 로거에 appender 설정
  logger.log(level, message, null); // 로거에 사용할 로깅 메소드 형식을 결정.
  // null 파라미터 자리는 exception 처리
};

const log = R.curry(logger)('console', 'json', '함수형 자바스크립트 프로그래밍');

// 다음 코드를 실행하면 에러가 발생한다.
// test5.html 파일로 대신 작동여부를 확인한다.
// log('ERROR', '에러가 발생하였습니다!!');
