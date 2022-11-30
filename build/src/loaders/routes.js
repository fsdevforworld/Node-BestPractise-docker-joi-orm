'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _config = _interopRequireDefault(require('config'))

var _acronym = require('../components/acronym/acronym.module')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// Routes
const API_PREFIX = _config.default.get('API_PREFIX')

const routes = [
  {
    path: '/acronym',
    route: _acronym.AcronymRoutes,
  },
]

var _default = (app) => {
  routes.forEach((route) => {
    app.use(API_PREFIX + route.path, route.route)
  })
}

exports.default = _default
//# sourceMappingURL=routes.js.map
