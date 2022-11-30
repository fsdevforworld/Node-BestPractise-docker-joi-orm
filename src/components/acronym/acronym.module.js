import express from 'express'

import { makeExpressCallback, makeValidatorCallback } from '../../middlewares'

// validator
import AcronymValidator from './acronym.validator'

// service
import AcronymService from './acronym.service'

// controller
import AcronymController from './acronym.controller'

// routes
import acronymRoutes from './acronym.routes'

const router = express.Router()

const routes = acronymRoutes({
  router,
  AcronymController,
  AcronymValidator,
  makeValidatorCallback,
  makeExpressCallback,
})
const AcronymRoutes = routes

export { AcronymController, AcronymService, AcronymRoutes }
