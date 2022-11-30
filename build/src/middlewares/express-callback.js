'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _default = (controller) => async (req, res) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    method: req.method,
    path: req.path,
    headers: {
      'Content-Type': req.get('Content-Type'),
      Authorization: req.get('Authorization'),
      Referer: req.get('referer'),
      'User-Agent': req.get('User-Agent'),
    },
  }
  const httpResponse = await controller(httpRequest)
  if (httpResponse.headers) res.set(httpResponse.headers)
  return res.status(httpResponse.statusCode).send(httpResponse.body)
}

exports.default = _default
//# sourceMappingURL=express-callback.js.map
