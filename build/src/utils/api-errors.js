'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.UnauthorizedError =
  exports.UnSupportedMediaTypeError =
  exports.UnProcessableEntityError =
  exports.NotFoundError =
  exports.MethodNotAllowedError =
  exports.InternalServerError =
  exports.ForbiddenError =
  exports.ConflictError =
  exports.BadRequestError =
  exports.AccessDeniedError =
  exports.APIError =
    void 0

/* eslint-disable max-classes-per-file */
class APIError extends Error {
  constructor(status, message) {
    super()
    this.status = status
    this.message = message
  }
}

exports.APIError = APIError

class BadRequestError extends APIError {
  constructor(message = 'Bad Request') {
    super(400, message)
  }
}

exports.BadRequestError = BadRequestError

class AccessDeniedError extends APIError {
  constructor(message = 'Access denied') {
    super(401, message)
  }
}

exports.AccessDeniedError = AccessDeniedError

class UnauthorizedError extends APIError {
  constructor(message = 'Unauthorized') {
    super(403, message)
  }
}

exports.UnauthorizedError = UnauthorizedError

class ForbiddenError extends APIError {
  constructor(message = 'Forbidden') {
    super(403, message)
  }
}

exports.ForbiddenError = ForbiddenError

class NotFoundError extends APIError {
  constructor(message = 'Not Found') {
    super(404, message)
  }
}

exports.NotFoundError = NotFoundError

class MethodNotAllowedError extends APIError {
  constructor(message = 'Method Not Allowed') {
    super(405, message)
  }
}

exports.MethodNotAllowedError = MethodNotAllowedError

class ConflictError extends APIError {
  constructor(message = 'Conflict') {
    super(408, message)
  }
}

exports.ConflictError = ConflictError

class UnSupportedMediaTypeError extends APIError {
  constructor(message = 'Unsupported Media Type') {
    super(415, message)
  }
}

exports.UnSupportedMediaTypeError = UnSupportedMediaTypeError

class UnProcessableEntityError extends APIError {
  constructor(message = 'Unprocessable Entity') {
    super(422, message)
  }
}

exports.UnProcessableEntityError = UnProcessableEntityError

class InternalServerError extends APIError {
  constructor(message = 'Internal Server Error') {
    super(500, message)
  }
}

exports.InternalServerError = InternalServerError
//# sourceMappingURL=api-errors.js.map
