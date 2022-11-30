/* eslint-disable no-unused-vars */
import { logger } from '../support/logger'
import { APIError } from '../utils/api-errors'

export default async (error, req, res, next) => {
  logger.error(error)

  // catch api error
  if (error instanceof APIError) {
    return res.status(error.status).send({
      error: {
        code: error.status,
        message: error.message,
      },
    })
  }

  // connect all errors
  return res.status(500).send({
    error: {
      code: 500,
      message: 'Something went wrong!',
    },
  })
}
