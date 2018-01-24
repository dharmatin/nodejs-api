import winston from 'winston';
import dateFormat from 'dateformat';

class Logger {
  constructor () {
    const filename = `/media/dharmatin/Data/nodefier/node-api/logs/test-${dateFormat(new Date(), 'yyyymmdd')}.log`;

    return new (winston.Logger)({
      // level: 'debug',
      transports: [
        new (winston.transports.File)({
          filename: filename,
          json: false,
          timestamp: function () {
            return dateFormat(new Date(), 'yyyy/mm/dd hh:MM:ss');
          },
          formatter: function (options) {
            return `${options.timestamp()} [${options.level}]: [${options.message}]`;
          }
        })
      ]
    });
  }

  static write (level, message) {
    const logger = new Logger();
    logger.log(level, message);
  }
}

export default Logger;
