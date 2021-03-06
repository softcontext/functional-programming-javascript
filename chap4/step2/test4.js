/*
  https://www.npmjs.com/package/log4js
  https://log4js-node.github.io/log4js-node/
 */
const Log4js = require('log4js');

Log4js.configure({
  appenders: {
    cheese: {type: 'file', filename: __dirname + '/cheese.log'}
  },
  categories: {
    default: {
      appenders: ['cheese'], // appenders 항목에 등록한 appender 중 하나를 적용한다.
      level: 'debug'
    }
  }
});

const logger = Log4js.getLogger('StudentEvents');
// 로깅 주제가 'StudentEvents'로 설정된 logger 객체를 얻는다.

logger.trace('Entering cheese testing');
// level: 'debug' 설정이므로 trace 함수 사용은 무시될 것이다.
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');

console.log('Done. check "cheese.log" file.');
