'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _apiErrors = require('../utils/api-errors')

var _default = async (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    throw new _apiErrors.BadRequestError(err.message)
  }

  return next()
}

exports.default = _default
//# sourceMappingURL=validate-json.js.map
