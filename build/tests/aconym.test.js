'use strict'

var _chai = _interopRequireDefault(require('chai'))

var _chaiHttp = _interopRequireDefault(require('chai-http'))

var _app = _interopRequireDefault(require('../src/app'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/* eslint-disable no-unused-vars */

/* eslint-disable no-undef */

/* eslint-disable node/no-unpublished-import */
const should = _chai.default.should()

_chai.default.use(_chaiHttp.default)
/*
 * Test the /GET route
 */

describe('/GET', () => {
  it('it should GET the acronyms', (done) => {
    _chai.default
      .request(_app.default)
      .get('/api/acronym')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('data')
        res.body.data.should.have.lengthOf.at.above(0)
        done()
      })
  })
  it('it should GET the acronyms using query', (done) => {
    _chai.default
      .request(_app.default)
      .get('/api/acronym?from=1&limit=2&search=AE')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('data')
        res.body.data.should.have.lengthOf.at.below(3)
        done()
      })
  })
  it('it should wrong url', (done) => {
    _chai.default
      .request(_app.default)
      .get('/api/acronyms?from=1&limit=2&search=AE')
      .end((err, res) => {
        res.should.have.status(404)
        res.body.should.be.a('object')
        res.body.should.have.property('error')
        done()
      })
  })
})
/*
 * Test the /POST route
 */

describe('/POST', () => {
  it('it should POST the acronym', (done) => {
    _chai.default
      .request(_app.default)
      .post('/api/acronym')
      .send({
        acronym: 'me',
        definition: '123',
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('data')
        res.body.data.should.to.deep.equal({
          me: '123',
        })
        done()
      })
  })
  it('it should POST wrong acronym', (done) => {
    _chai.default
      .request(_app.default)
      .post('/api/acronym')
      .send({
        definition: '123',
      })
      .end((err, res) => {
        res.should.have.status(400)
        res.body.should.be.a('object')
        res.body.should.have.property('error')
        done()
      })
  })
})
/*
 * Test the /PUT route
 */

describe('/PUT', () => {
  it('it should PUT the acronym', (done) => {
    _chai.default
      .request(_app.default)
      .put('/api/acronym/1UP')
      .send({
        acronym: 'me',
        definition: '123',
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('data')
        res.body.data.should.to.deep.equal({
          me: '123',
        })
        done()
      })
  })
  it('it should PUT wrong acronym', (done) => {
    _chai.default
      .request(_app.default)
      .put('/api/acronym')
      .send({
        definition: '123',
      })
      .end((err, res) => {
        res.should.have.status(404)
        res.body.should.be.a('object')
        res.body.should.have.property('error')
        done()
      })
  })
})
/*
 * Test the /DELETE route
 */

describe('/DELETE', () => {
  it('it should DELETE the acronym', (done) => {
    _chai.default
      .request(_app.default)
      .delete('/api/acronym/me')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('data')
        res.body.data.should.to.deep.equal(true)
        done()
      })
  })
  it('it should DELETE wrong acronym', (done) => {
    _chai.default
      .request(_app.default)
      .delete('/api/acronym')
      .end((err, res) => {
        res.should.have.status(404)
        res.body.should.be.a('object')
        res.body.should.have.property('error')
        done()
      })
  })
})
//# sourceMappingURL=aconym.test.js.map
