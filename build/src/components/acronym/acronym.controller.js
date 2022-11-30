'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _acronym = _interopRequireDefault(require('./acronym.service'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const AcronymController = {
  /**
   * Handle creating acronym.
   * @async
   * @method
   * @param {ExpressRequest} httpRequest
   * @returns {Promise.<ControllerResponse> }
   */
  create: async (httpRequest) => {
    const data = await _acronym.default.create(httpRequest.body)
    return {
      statusCode: 200,
      body: {
        data: data,
      },
    }
  },
  getAll: async (httpRequest) => {
    const { header, data } = await _acronym.default.getAll(httpRequest.query)
    return {
      headers: header,
      statusCode: 200,
      body: {
        data: data,
      },
    }
  },
  getByKey: async (httpRequest) => {
    const data = await _acronym.default.getByKey(httpRequest.params)
    return {
      statusCode: 200,
      body: {
        data: data,
      },
    }
  },
  update: async (httpRequest) => {
    const data = await _acronym.default.updateByKey(
      httpRequest.body,
      httpRequest.params
    )
    return {
      statusCode: 200,
      body: {
        data: data,
      },
    }
  },
  delete: async (httpRequest) => {
    const data = await _acronym.default.deleteByKey(httpRequest.params)
    return {
      statusCode: 200,
      body: {
        data: data,
      },
    }
  },
}
var _default = AcronymController
exports.default = _default
//# sourceMappingURL=acronym.controller.js.map
