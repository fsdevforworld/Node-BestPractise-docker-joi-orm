/* eslint-disable no-undef */
/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable no-prototype-builtins */

/**
 * fake model
 */
import fs from 'fs'
import { search as fuzzySearch } from 'fast-fuzzy'

const filePath = `${__dirname.split('\\').slice(0, -1).join('/')}/acronym.json`

class AcronymDAO {
  constructor(path) {
    try {
      let dbData = fs.readFileSync(path)
      dbData = JSON.parse(dbData)
      this.acronyms =
        typeof dbData === 'object' && dbData?.length >= 0
          ? dbData
          : fs.writeFileSync(path, '[]')
      this.path = path
    } catch {
      fs.writeFileSync(path, '[]')
    }
  }

  async findAll(from = 0, limit = 10, search = '') {
    const keys = await this.acronyms.map((acronym) => Object.keys(acronym)[0])

    const searched = !search ? keys : fuzzySearch(search, keys)

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
      fs.writeFileSync(this.path, JSON.stringify(newData))
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
      fs.writeFileSync(this.path, JSON.stringify(newData))
    } catch {
      return null
    }

    return updateddData
  }

  async destroy(acronym) {
    const newData = this.acronyms.filter((d) => !d.hasOwnProperty(acronym))

    try {
      await fs.writeFileSync(this.path, JSON.stringify(newData))
    } catch {
      return null
    }

    return true
  }
}

const Acronym = new AcronymDAO(filePath)

export default Acronym
