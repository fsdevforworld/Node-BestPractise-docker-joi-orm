'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.requestLogger = exports.logger = void 0

var _winston = _interopRequireDefault(require('winston'))

var _config = require('config')

var _expressWinston = _interopRequireDefault(require('express-winston'))

var _package = _interopRequireDefault(require('../../../package.json'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/* eslint-disable no-unused-vars */
const logFormatter = _winston.default.format.printf((info) => {
  const { timestamp, level, stack, message } = info
  const errorMessage = stack || message
  const symbols = Object.getOwnPropertySymbols(info)

  if (info[symbols[0]] !== 'error') {
    return `${timestamp} ${level}: ${message}`
  }

  return `${timestamp} ${level}: ${errorMessage}`
})

const logger = _winston.default.createLogger({
  maxsize: 5242880,
  // 5MB
  maxFiles: 5,
  level: 'debug',
  format: _winston.default.format.combine(
    _winston.default.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    _winston.default.format.errors({
      stack: true,
    }),
    _winston.default.format.splat(),
    _winston.default.format.json()
  ),
  defaultMeta: {
    service: `${_package.default.name.toLocaleLowerCase()}-service`,
  },
  transports: [
    new _winston.default.transports.Console({
      format: _winston.default.format.combine(
        _winston.default.format.colorize(),
        logFormatter
      ),
    }),
  ],
})

exports.logger = logger

if (_config.NODE_ENV === 'production') {
  logger.add(
    new _winston.default.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    })
  )
  logger.add(
    new _winston.default.transports.File({
      filename: 'logs/combined.log',
      level: 'debug',
    })
  )
}

const requestLogger = _expressWinston.default.logger({
  transports: [new _winston.default.transports.Console()],
  format: _winston.default.format.combine(
    _winston.default.format.json(),
    _winston.default.format.prettyPrint()
  ),
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: false,

  ignoreRoute(req, res) {
    return false
  },
})

exports.requestLogger = requestLogger
//# sourceMappingURL=index.js.map
