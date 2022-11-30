'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

/**
 * Normalize a port into a number, string, or false.
 */
var _default = (val) => {
  const port = parseInt(val, 10)

  if (Number.isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

exports.default = _default
//# sourceMappingURL=normalize-port.js.map
