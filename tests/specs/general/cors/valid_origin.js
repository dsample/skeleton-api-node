'use strict'

const chai = require('chai')
const supertest = require('supertest')
const expect = chai.expect
const api = supertest(process.env.API_BASE_URI || 'http://api:3000')

describe('CORS', function(){
  describe('From a valid origin', function() {
    let response

    before(function(done){
      api.options('/')
        .set('Accept', 'application/json')
        .set('Origin', 'http://x.example.com')
        .set('Access-Control-Request-Method', 'GET')
        .set('Access-Control-Request-Headers', 'Foo')
        .end(function(err, res){
          response = res
          done()
        })
    })

    it('responds with no content (204)', function() {
      expect(response.statusCode).to.equal(204)
    })

    it('responds with an empty body', () => {
      expect(response.text).to.equal('')
    })

    it('responds with the Access-Control-Allow-Origin header', function() {
      expect(response.headers['access-control-allow-origin']).to.equal('http://x.example.com')
    })
    it('responds with the Access-Control-Allow-Methods header', function() {
      expect(response.headers['access-control-allow-methods']).to.equal('GET,HEAD,PUT,PATCH,POST,DELETE')
    })
    it('responds with the Access-Control-Allow-Headers header', function() {
      expect(response.headers['access-control-allow-headers']).to.equal('Foo')
    })
    it('responds with the Access-Control-Max-Age header', function() {
      expect(response.headers['access-control-max-age']).to.equal('600')
    })
    it('responds with the Access-Control-Allow-Credentials header', function() {
      expect(response.headers['access-control-allow-credentials']).to.equal('true')
    })
    // it('responds with the Access-Control-Expose-Headers header', function() {
    //   expect(response.headers['access-control-expose-headers']).to.equal('Foo')
    // })
  })
})
