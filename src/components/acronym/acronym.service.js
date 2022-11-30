import { NotFoundError, InternalServerError } from '../../utils/api-errors'
import { Acronym } from '../../db/models'

const create = async (requestBody) => {
  const { acronym, definition } = requestBody
  const result = await Acronym.create({ acronym, definition })

  return result
}
const getByKey = async (requestParams) => {
  const { acronym } = requestParams
  const result = await Acronym.findByKey(acronym)

  if (!result) throw new NotFoundError('Acronym not found')

  return result
}
const getAll = async (requestQuery) => {
  const { from, limit, search } = requestQuery
  const result = await Acronym.findAll(from, limit, search)

  return result
}
const updateByKey = async (requestBody, requestParams) => {
  const { acronym, definition } = requestBody
  const result = await Acronym.updateByKey(requestParams.acronym, {
    acronym,
    definition,
  })

  if (!result) throw new InternalServerError('Acronym not found')

  return result
}
const deleteByKey = async (requestParams) => {
  const { key } = { requestParams }
  const result = await Acronym.destroy(key)

  if (!result) throw new InternalServerError('Acronym not found')

  return result
}
export default {
  create,
  getByKey,
  getAll,
  updateByKey,
  deleteByKey,
}
