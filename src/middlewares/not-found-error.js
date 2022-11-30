/* eslint-disable no-unused-vars */
import { NotFoundError } from '../utils/api-errors'

export default async (req, res) => {
  const errorMessage = `Not Found: ${req.method} on ${req.url}`
  throw new NotFoundError(errorMessage)
}
