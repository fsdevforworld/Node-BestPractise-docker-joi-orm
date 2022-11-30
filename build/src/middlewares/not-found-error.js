'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _apiErrors = require('../utils/api-errors')

/* eslint-disable no-unused-vars */
var _default = async (req, res) => {
  const errorMessage = `Not Found: ${req.method} on ${req.url}`
  throw new _apiErrors.NotFoundError(errorMessage)
}

exports.default = _default
//# sourceMappingURL=not-found-error.js.map
