'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _joi = _interopRequireDefault(require('joi'))

var _apiErrors = require('../utils/api-errors')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = (schema) => async (req, res, next) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
  }

  try {
    const result = await _joi.default.validate(httpRequest, schema)
    req.body = result.body
    req.params = result.params
    req.query = result.query
  } catch (err) {
    throw new _apiErrors.BadRequestError('invalid request')
  }

  return next()
}

exports.default = _default
//# sourceMappingURL=validator-callback.js.map
