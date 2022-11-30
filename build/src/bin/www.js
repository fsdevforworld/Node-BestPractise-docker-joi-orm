'use strict'

var _http = _interopRequireDefault(require('http'))

var _stoppable = _interopRequireDefault(require('stoppable'))

var _app = _interopRequireDefault(require('../app'))

var _logger = require('../support/logger')

var _normalizePort = _interopRequireDefault(require('../utils/normalize-port'))

var _gracefulShutdown = _interopRequireDefault(
  require('../utils/graceful-shutdown')
)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/* eslint-disable no-unused-vars */

/* eslint-disable no-process-exit */

/**
 * Get port from environment and store in Express.
 */
const port = (0, _normalizePort.default)(process.env.PORT || '3000')

_app.default.set('port', port)
/**
 * Event listener for HTTP server "error" event.
 */

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error
  } // handle specific listen errors with friendly messages

  switch (error.code) {
    case 'EACCES':
      _logger.logger.error(
        `Port ${process.env.PORT} requires elevated privileges`
      )

      process.exit(1)
      break

    case 'EADDRINUSE':
      _logger.logger.error(`Port ${process.env.PORT} is already in use`)

      process.exit(1)
      break

    default:
      throw error
  }
}
/**
 * Create HTTP server.
 */

const server = _http.default.createServer(_app.default)
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`

  _logger.logger.info(`Listening on ${bind}`)
}

server.on('error', onError)
server.on('listening', onListening) // quit on ctrl+c when running docker in terminal

process.on('SIGINT', async () => {
  _logger.logger.info(
    'Got SIGINT (aka ctrl+c in docker). Graceful shutdown',
    new Date().toISOString()
  )

  await (0, _gracefulShutdown.default)((0, _stoppable.default)(server))
}) // quit properly on docker stop

process.on('SIGTERM', async () => {
  _logger.logger.log(
    'Got SIGTERM (docker container stop).Graceful shutdown',
    new Date().toISOString()
  )

  await (0, _gracefulShutdown.default)((0, _stoppable.default)(server))
})
process.on('unhandledRejection', (reason, p) => {
  // I just caught an unhandled promise rejection,
  // since we already have fallback handler for unhandled errors (see below),
  // let throw and let him handle that
  throw reason
})
process.on('uncaughtException', (error) => {
  // I just received an error that was never handled, time to handle it and then decide whether a restart is needed
  _logger.logger.error('There was an uncaught error', error)

  process.exit(1) // mandatory (as per the Node.js docs)
})
//# sourceMappingURL=www.js.map
