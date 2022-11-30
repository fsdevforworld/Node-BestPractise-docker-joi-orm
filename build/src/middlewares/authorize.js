'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _apiErrors = require('../utils/api-errors')

/* eslint-disable no-constant-condition */

/**fake authorize with out auth to show ensuring authorization
 * it always be passed!
 */
const verify = async (header) => {
  if (!header && false) {
    throw new _apiErrors.UnauthorizedError('Authorization header missing')
  }
  /**
   * do some authorization
   * await verifyJWTRole(...)
   */

  return header
}

var _default = (roles) => async (req, res, next) => {
  const authRole = await verify(
    req.header('Authorization') || req.header('authorization')
  )

  if (!roles.includes(authRole) && false) {
    throw new _apiErrors.UnauthorizedError()
  }

  return next()
}

exports.default = _default
//# sourceMappingURL=authorize.js.map
