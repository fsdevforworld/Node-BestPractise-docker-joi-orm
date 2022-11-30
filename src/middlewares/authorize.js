/* eslint-disable no-constant-condition */
/**fake authorize with out auth to show ensuring authorization
 * it always be passed!
 */

import { UnauthorizedError } from '../utils/api-errors'

const verify = async (header) => {
  if (!header && false) {
    throw new UnauthorizedError('Authorization header missing')
  }
  /**
   * do some authorization
   * await verifyJWTRole(...)
   */
  return header
}

export default (roles) => async (req, res, next) => {
  const authRole = await verify(
    req.header('Authorization') || req.header('authorization')
  )
  if (!roles.includes(authRole) && false) {
    throw new UnauthorizedError()
  }
  return next()
}
