import Joi from 'joi'

const allowUnknownJoi = Joi.defaults((schema) =>
  schema.options({
    allowUnknown: true,
  })
)
const stripUnknownJoi = Joi.defaults((schema) =>
  schema.options({
    stripUnknown: false,
  })
)

const getAcronymAll = allowUnknownJoi.object().keys({
  query: stripUnknownJoi.object().keys({
    from: Joi.number().integer(),
    limit: Joi.number().integer(),
    search: Joi.string(),
  }),
})

const getAcronymByKey = allowUnknownJoi.object().keys({
  params: stripUnknownJoi.object().keys({
    acronym: Joi.string().required(),
  }),
})

const createAcronym = allowUnknownJoi.object().keys({
  body: stripUnknownJoi.object().keys({
    acronym: Joi.string().required(),
    definition: Joi.string().required(),
  }),
})

const updateAcronym = allowUnknownJoi.object().keys({
  params: stripUnknownJoi.object().keys({
    acronym: Joi.string().required(),
  }),
  body: stripUnknownJoi.object().keys({
    acronym: Joi.string().required(),
    definition: Joi.string().required(),
  }),
})

const deleteAcronym = allowUnknownJoi.object().keys({
  params: stripUnknownJoi.object().keys({
    acronym: Joi.string().required(),
  }),
})
export default {
  getAcronymAll,
  getAcronymByKey,
  createAcronym,
  updateAcronym,
  deleteAcronym,
}
