'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
Object.defineProperty(exports, 'AcronymController', {
  enumerable: true,
  get: function () {
    return _acronym3.default
  },
})
exports.AcronymRoutes = void 0
Object.defineProperty(exports, 'AcronymService', {
  enumerable: true,
  get: function () {
    return _acronym2.default
  },
})

var _express = _interopRequireDefault(require('express'))

var _middlewares = require('../../middlewares')

var _acronym = _interopRequireDefault(require('./acronym.validator'))

var _acronym2 = _interopRequireDefault(require('./acronym.service'))

var _acronym3 = _interopRequireDefault(require('./acronym.controller'))

var _acronym4 = _interopRequireDefault(require('./acronym.routes'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// validator
// service
// controller
// routes
const router = _express.default.Router()

const routes = (0, _acronym4.default)({
  router,
  AcronymController: _acronym3.default,
  AcronymValidator: _acronym.default,
  makeValidatorCallback: _middlewares.makeValidatorCallback,
  makeExpressCallback: _middlewares.makeExpressCallback,
})
const AcronymRoutes = routes
exports.AcronymRoutes = AcronymRoutes
//# sourceMappingURL=acronym.module.js.map
