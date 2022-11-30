'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _fs = _interopRequireDefault(require('fs'))

var _fastFuzzy = require('fast-fuzzy')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/* eslint-disable no-undef */

/* eslint-disable node/no-unsupported-features/es-syntax */

/* eslint-disable no-prototype-builtins */

/**
 * fake model
 */
const filePath = `${__dirname.split('\\').slice(0, -1).join('/')}/acronym.json`

class AcronymDAO {
  constructor(path) {
    try {
      let dbData = _fs.default.readFileSync(path)

      dbData = JSON.parse(dbData)
      this.acronyms =
        typeof dbData === 'object' && dbData?.length >= 0
          ? dbData
          : _fs.default.writeFileSync(path, '[]')
      this.path = path
    } catch {
      _fs.default.writeFileSync(path, '[]')
    }
  }

  async findAll(from = 0, limit = 10, search = '') {
    const keys = await this.acronyms.map((acronym) => Object.keys(acronym)[0])
    const searched = !search ? keys : (0, _fastFuzzy.search)(search, keys)
    const searchdata = await this.acronyms.filter((acronym) =>
      searched.find((d) => d === Object.keys(acronym)[0])
    )
    const leftNum = searchdata.length - from - limit
    const data = {
      header: `${leftNum >= 0 ? leftNum : 0}`,
      data: await searchdata.slice(from, from + limit),
    }
    return data
  }

  async findByKey(key) {
    const acronym = await this.acronyms.find((d) => d.hasOwnProperty(key))
    return acronym
  }

  async create({ acronym, definition }) {
    const createdData = JSON.parse(`{"${acronym}" : "${definition}"}`)
    const newData = [...this.acronyms, createdData]

    try {
      _fs.default.writeFileSync(this.path, JSON.stringify(newData))
    } catch {
      return null
    }

    return createdData
  }

  async updateByKey(key, { acronym, definition }) {
    const updateddData = JSON.parse(`{"${acronym}" : "${definition}"}`)
    const newData = await this.acronyms.map((d) =>
      d.hasOwnProperty(key) ? updateddData : d
    )

    try {
      _fs.default.writeFileSync(this.path, JSON.stringify(newData))
    } catch {
      return null
    }

    return updateddData
  }

  async destroy(acronym) {
    const newData = this.acronyms.filter((d) => !d.hasOwnProperty(acronym))

    try {
      await _fs.default.writeFileSync(this.path, JSON.stringify(newData))
    } catch {
      return null
    }

    return true
  }
}

const Acronym = new AcronymDAO(filePath)
var _default = Acronym
exports.default = _default
//# sourceMappingURL=Acronym.js.map
