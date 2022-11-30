/* eslint-disable no-unused-vars */
/* eslint-disable no-process-exit */
import http from 'http'
import stoppable from 'stoppable'
import app from '../app'
import { logger } from '../support/logger'

import normalizePort from '../utils/normalize-port'

import gracefulShutdown from '../utils/graceful-shutdown'

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000')

app.set('port', port)

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`Port ${process.env.PORT} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      logger.error(`Port ${process.env.PORT} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Create HTTP server.
 */

const server = http.createServer(app)

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
  logger.info(`Listening on ${bind}`)
}

server.on('error', onError)
server.on('listening', onListening)

// quit on ctrl+c when running docker in terminal
process.on('SIGINT', async () => {
  logger.info(
    'Got SIGINT (aka ctrl+c in docker). Graceful shutdown',
    new Date().toISOString()
  )
  await gracefulShutdown(stoppable(server))
})

// quit properly on docker stop
process.on('SIGTERM', async () => {
  logger.log(
    'Got SIGTERM (docker container stop).Graceful shutdown',
    new Date().toISOString()
  )
  await gracefulShutdown(stoppable(server))
})

process.on('unhandledRejection', (reason, p) => {
  // I just caught an unhandled promise rejection,
  // since we already have fallback handler for unhandled errors (see below),
  // let throw and let him handle that
  throw reason
})

process.on('uncaughtException', (error) => {
  // I just received an error that was never handled, time to handle it and then decide whether a restart is needed
  logger.error('There was an uncaught error', error)
  process.exit(1) // mandatory (as per the Node.js docs)
})
