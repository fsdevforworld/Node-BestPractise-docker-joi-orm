'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _express = _interopRequireDefault(require('express'))

var _cors = _interopRequireDefault(require('cors'))

var _dotenv = require('dotenv')

require('express-async-errors')

var _logger = require('./support/logger')

var _middlewares = require('./middlewares')

var _loaders = require('./loaders')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const app = (0, _express.default)()
;(0, _dotenv.config)() // enable cors

app.use((0, _cors.default)())
app.use(_logger.requestLogger) // parse json body

app.use(_express.default.json())
app.use(
  _express.default.urlencoded({
    extended: false,
  })
) // handle bad json format

app.use(_middlewares.badJsonHandler) // load routes

;(0, _loaders.Routes)(app) // handle 404 not found error

app.use(_middlewares.notFoundHandler) // catch all errors

app.use(_middlewares.errorHandler)
var _default = app
exports.default = _default
//# sourceMappingURL=app.js.map
