import authorize from '../../middlewares/authorize'

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
export default ({
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
    authorize([]),
    makeValidatorCallback(AcronymValidator.updateAcronym),
    makeExpressCallback(AcronymController.update)
  )
  router.delete(
    '/:acronym',
    authorize([]),
    makeValidatorCallback(AcronymValidator.deleteAcronym),
    makeExpressCallback(AcronymController.delete)
  )
  return router
}
