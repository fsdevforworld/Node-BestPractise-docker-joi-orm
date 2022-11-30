'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _logger = _interopRequireDefault(require('../support/logger'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/* eslint-disable no-process-exit */
var _default = async (server) => {
  try {
    _logger.default.info('Closed connection!')

    await server.close()
    process.exit()
  } catch (error) {
    _logger.default.error(error.message)

    process.exit(1)
  }
}

exports.default = _default
//# sourceMappingURL=graceful-shutdown.js.map
