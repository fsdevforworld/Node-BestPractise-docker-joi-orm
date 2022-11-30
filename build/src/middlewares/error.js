'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _logger = require('../support/logger')

var _apiErrors = require('../utils/api-errors')

/* eslint-disable no-unused-vars */
var _default = async (error, req, res, next) => {
  _logger.logger.error(error) // catch api error

  if (error instanceof _apiErrors.APIError) {
    return res.status(error.status).send({
      error: {
        code: error.status,
        message: error.message,
      },
    })
  } // connect all errors

  return res.status(500).send({
    error: {
      code: 500,
      message: 'Something went wrong!',
    },
  })
}

exports.default = _default
//# sourceMappingURL=error.js.map
