'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _joi = _interopRequireDefault(require('joi'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const allowUnknownJoi = _joi.default.defaults((schema) =>
  schema.options({
    allowUnknown: true,
  })
)

const stripUnknownJoi = _joi.default.defaults((schema) =>
  schema.options({
    stripUnknown: false,
  })
)

const getAcronymAll = allowUnknownJoi.object().keys({
  query: stripUnknownJoi.object().keys({
    from: _joi.default.number().integer(),
    limit: _joi.default.number().integer(),
    search: _joi.default.string(),
  }),
})
const getAcronymByKey = allowUnknownJoi.object().keys({
  params: stripUnknownJoi.object().keys({
    acronym: _joi.default.string().required(),
  }),
})
const createAcronym = allowUnknownJoi.object().keys({
  body: stripUnknownJoi.object().keys({
    acronym: _joi.default.string().required(),
    definition: _joi.default.string().required(),
  }),
})
const updateAcronym = allowUnknownJoi.object().keys({
  params: stripUnknownJoi.object().keys({
    acronym: _joi.default.string().required(),
  }),
  body: stripUnknownJoi.object().keys({
    acronym: _joi.default.string().required(),
    definition: _joi.default.string().required(),
  }),
})
const deleteAcronym = allowUnknownJoi.object().keys({
  params: stripUnknownJoi.object().keys({
    acronym: _joi.default.string().required(),
  }),
})
var _default = {
  getAcronymAll,
  getAcronymByKey,
  createAcronym,
  updateAcronym,
  deleteAcronym,
}
exports.default = _default
//# sourceMappingURL=acronym.validator.js.map
