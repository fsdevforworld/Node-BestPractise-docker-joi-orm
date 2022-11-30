import AcronymService from './acronym.service'

const AcronymController = {
  /**
   * Handle creating acronym.
   * @async
   * @method
   * @param {ExpressRequest} httpRequest
   * @returns {Promise.<ControllerResponse> }
   */
  create: async (httpRequest) => {
    const data = await AcronymService.create(httpRequest.body)
    return {
      statusCode: 200,
      body: {
        data: data,
      },
    }
  },
  getAll: async (httpRequest) => {
    const { header, data } = await AcronymService.getAll(httpRequest.query)
    return {
      headers: header,
      statusCode: 200,
      body: {
        data: data,
      },
    }
  },
  getByKey: async (httpRequest) => {
    const data = await AcronymService.getByKey(httpRequest.params)
    return {
      statusCode: 200,
      body: {
        data: data,
      },
    }
  },
  update: async (httpRequest) => {
    const data = await AcronymService.updateByKey(
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
    const data = await AcronymService.deleteByKey(httpRequest.params)
    return {
      statusCode: 200,
      body: {
        data: data,
      },
    }
  },
}

export default AcronymController
