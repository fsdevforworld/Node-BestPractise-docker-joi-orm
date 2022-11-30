'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _apiErrors = require('../../utils/api-errors')

var _models = require('../../db/models')

const create = async (requestBody) => {
  const { acronym, definition } = requestBody
  const result = await _models.Acronym.create({
    acronym,
    definition,
  })
  return result
}

const getByKey = async (requestParams) => {
  const { acronym } = requestParams
  const result = await _models.Acronym.findByKey(acronym)
  if (!result) throw new _apiErrors.NotFoundError('Acronym not found')
  return result
}

const getAll = async (requestQuery) => {
  const { from, limit, search } = requestQuery
  const result = await _models.Acronym.findAll(from, limit, search)
  return result
}

const updateByKey = async (requestBody, requestParams) => {
  const { acronym, definition } = requestBody
  const result = await _models.Acronym.updateByKey(requestParams.acronym, {
    acronym,
    definition,
  })
  if (!result) throw new _apiErrors.InternalServerError('Acronym not found')
  return result
}

const deleteByKey = async (requestParams) => {
  const { key } = {
    requestParams,
  }
  const result = await _models.Acronym.destroy(key)
  if (!result) throw new _apiErrors.InternalServerError('Acronym not found')
  return result
}

var _default = {
  create,
  getByKey,
  getAll,
  updateByKey,
  deleteByKey,
}
exports.default = _default
//# sourceMappingURL=acronym.service.js.map
