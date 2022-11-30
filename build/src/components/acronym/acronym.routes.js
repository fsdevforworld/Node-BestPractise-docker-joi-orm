'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _authorize = _interopRequireDefault(require('../../middlewares/authorize'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 *
 * @param {Object} AcronymRouter
 * @param {ExpressRouter} AcronymRouter.router
 * @param {AcronymController} AcronymRouter.AcronymController
 * @param {AcronymValidator} AcronymRouter.AcronymValidator
 * @param {makeExpressCallback} AcronymRouter.makeExpressCallback
 * @param {makeValidatorCallback} AcronymRouter.makeValidatorCallback
 * @returns {ExpressRouter}
 */
var _default = ({
  router,
  AcronymController,
  AcronymValidator,
  makeValidatorCallback,
  makeExpressCallback,
}) => {
  router.get(
    '/',
    makeValidatorCallback(AcronymValidator.getAcronymAll),
    makeExpressCallback(AcronymController.getAll)
  )
  router.get(
    '/:acronym',
    makeValidatorCallback(AcronymValidator.getAcronymByKey),
    makeExpressCallback(AcronymController.getByKey)
  )
  router.post(
    '/',
    makeValidatorCallback(AcronymValidator.createAcronym),
    makeExpressCallback(AcronymController.create)
  )
  router.put(
    '/:acronym',
    (0, _authorize.default)([]),
    makeValidatorCallback(AcronymValidator.updateAcronym),
    makeExpressCallback(AcronymController.update)
  )
  router.delete(
    '/:acronym',
    (0, _authorize.default)([]),
    makeValidatorCallback(AcronymValidator.deleteAcronym),
    makeExpressCallback(AcronymController.delete)
  )
  return router
}

exports.default = _default
//# sourceMappingURL=acronym.routes.js.map
