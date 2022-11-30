/* eslint-disable no-unused-vars */
import winston from 'winston'
import { NODE_ENV } from 'config'

import expressWinston from 'express-winston'
import packageName from '../../../package.json'

const logFormatter = winston.format.printf((info) => {
  const { timestamp, level, stack, message } = info
  const errorMessage = stack || message

  const symbols = Object.getOwnPropertySymbols(info)
  if (info[symbols[0]] !== 'error') {
    return `${timestamp} ${level}: ${message}`
  }

  return `${timestamp} ${level}: ${errorMessage}`
})

const logger = winston.createLogger({
  maxsize: 5242880, // 5MB
  maxFiles: 5,
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  defaultMeta: { service: `${packageName.name.toLocaleLowerCase()}-service` },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), logFormatter),
    }),
  ],
})

if (NODE_ENV === 'production') {
  logger.add(
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' })
  )
  logger.add(
    new winston.transports.File({
      filename: 'logs/combined.log',
      level: 'debug',
    })
  )
}

const requestLogger = expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint()
  ),
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: false,
  ignoreRoute(req, res) {
    return false
  },
})

export { logger, requestLogger }
