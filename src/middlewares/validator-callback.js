import Joi from 'joi'
import { BadRequestError } from '../utils/api-errors'
export default (schema) => async (req, res, next) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
  }
  try {
    const result = await Joi.validate(httpRequest, schema)

    req.body = result.body
    req.params = result.params
    req.query = result.query
  } catch (err) {
    throw new BadRequestError('invalid request')
  }

  return next()
}
