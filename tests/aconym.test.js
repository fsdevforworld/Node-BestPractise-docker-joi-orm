/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable node/no-unpublished-import */
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app'

const should = chai.should()

chai.use(chaiHttp)

/*
 * Test the /GET route
 */
describe('/GET', () => {
  it('it should GET the acronyms', (done) => {
    chai
      .request(app)
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
    chai
      .request(app)
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
    chai
      .request(app)
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
    chai
      .request(app)
      .post('/api/acronym')
      .send({ acronym: 'me', definition: '123' })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('data')
        res.body.data.should.to.deep.equal({ me: '123' })
        done()
      })
  })
  it('it should POST wrong acronym', (done) => {
    chai
      .request(app)
      .post('/api/acronym')
      .send({ definition: '123' })
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
    chai
      .request(app)
      .put('/api/acronym/1UP')
      .send({ acronym: 'me', definition: '123' })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('data')
        res.body.data.should.to.deep.equal({ me: '123' })
        done()
      })
  })
  it('it should PUT wrong acronym', (done) => {
    chai
      .request(app)
      .put('/api/acronym')
      .send({ definition: '123' })
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
    chai
      .request(app)
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
    chai
      .request(app)
      .delete('/api/acronym')
      .end((err, res) => {
        res.should.have.status(404)
        res.body.should.be.a('object')
        res.body.should.have.property('error')
        done()
      })
  })
})
