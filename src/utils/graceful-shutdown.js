/* eslint-disable no-process-exit */
import logger from '../support/logger'

export default async (server) => {
  try {
    logger.info('Closed connection!')
    await server.close()
    process.exit()
  } catch (error) {
    logger.error(error.message)
    process.exit(1)
  }
}
